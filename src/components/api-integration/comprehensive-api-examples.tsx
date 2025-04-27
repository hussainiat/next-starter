"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { AlertCircle, Check, Loader2, RefreshCw, Wifi, WifiOff } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Example API response types
interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface User {
  id: number
  name: string
  email: string
  username: string
}

interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

interface GraphQLResponse<T> {
  data: T
  errors?: Array<{
    message: string
    locations: Array<{
      line: number
      column: number
    }>
    path: string[]
  }>
}

interface CountryData {
  name: string
  code: string
  capital: string
  currency: string
}

interface StockData {
  symbol: string
  price: number
  change: number
  timestamp: number
}

// Mock WebSocket for real-time data
class MockWebSocket {
  private callbacks: Record<string, Function[]> = {}
  private connected: boolean = false
  private interval: NodeJS.Timeout | null = null
  private stockData: StockData[] = [
    { symbol: "AAPL", price: 150.25, change: 0.75, timestamp: Date.now() },
    { symbol: "MSFT", price: 290.45, change: 1.25, timestamp: Date.now() },
    { symbol: "GOOGL", price: 2750.10, change: -5.20, timestamp: Date.now() },
  ]

  constructor() {}

  connect() {
    this.connected = true
    this.emit("open", {})
    
    // Simulate real-time updates
    this.interval = setInterval(() => {
      if (!this.connected) return
      
      const updatedStocks = this.stockData.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() * 2 - 1),
        change: (Math.random() * 2 - 1) * 2,
        timestamp: Date.now()
      }))
      
      this.stockData = updatedStocks
      this.emit("message", { data: JSON.stringify({ stocks: updatedStocks }) })
    }, 3000)
  }

  disconnect() {
    this.connected = false
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
    this.emit("close", {})
  }

  on(event: string, callback: Function) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = []
    }
    this.callbacks[event].push(callback)
  }

  emit(event: string, data: any) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach(callback => callback(data))
    }
  }

  isConnected() {
    return this.connected
  }
}

// API client with different patterns
const apiClient = {
  // REST API examples
  async getPosts(page = 1, limit = 3): Promise<Post[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    return response.json()
  },
  
  // GraphQL API example (simulated)
  async getCountriesGraphQL(): Promise<GraphQLResponse<{ countries: CountryData[] }>> {
    // This is a mock implementation since we don't have a real GraphQL endpoint
    // In a real app, you would use a GraphQL client like Apollo or urql
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            countries: [
              { name: "United States", code: "US", capital: "Washington D.C.", currency: "USD" },
              { name: "United Kingdom", code: "GB", capital: "London", currency: "GBP" },
              { name: "Japan", code: "JP", capital: "Tokyo", currency: "JPY" },
              { name: "Germany", code: "DE", capital: "Berlin", currency: "EUR" },
              { name: "France", code: "FR", capital: "Paris", currency: "EUR" },
            ]
          }
        })
      }, 1000)
    })
  },
  
  // WebSocket API for real-time data (simulated)
  createStockWebSocket(): MockWebSocket {
    return new MockWebSocket()
  }
}

// REST API Example Component
function RestApiExample() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  
  const fetchPosts = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const data = await apiClient.getPosts(page)
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    fetchPosts()
  }, [page])
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">REST API Example</h3>
        <p className="text-sm text-muted-foreground">
          Fetching data from JSONPlaceholder API with pagination
        </p>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                  <CardDescription>Post ID: {post.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{post.body}</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline">User ID: {post.userId}</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1 || loading}
          >
            Previous
          </Button>
          <span className="py-2 px-4 text-sm">
            Page {page}
          </span>
          <Button 
            variant="outline" 
            onClick={() => setPage(p => p + 1)}
            disabled={loading}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

// GraphQL API Example Component
function GraphQLApiExample() {
  const [countries, setCountries] = useState<CountryData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const fetchCountries = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await apiClient.getCountriesGraphQL()
      if (response.errors) {
        throw new Error(response.errors[0].message)
      }
      setCountries(response.data.countries)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    fetchCountries()
  }, [])
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">GraphQL API Example</h3>
        <p className="text-sm text-muted-foreground">
          Fetching data using GraphQL query pattern (simulated)
        </p>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">Country</th>
                  <th className="py-2 px-4 text-left">Code</th>
                  <th className="py-2 px-4 text-left">Capital</th>
                  <th className="py-2 px-4 text-left">Currency</th>
                </tr>
              </thead>
              <tbody>
                {countries.map(country => (
                  <tr key={country.code} className="border-b hover:bg-muted/50">
                    <td className="py-2 px-4">{country.name}</td>
                    <td className="py-2 px-4">{country.code}</td>
                    <td className="py-2 px-4">{country.capital}</td>
                    <td className="py-2 px-4">{country.currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            onClick={fetchCountries}
            disabled={loading}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>
    </div>
  )
}

// WebSocket API Example Component
function WebSocketApiExample() {
  const [stocks, setStocks] = useState<StockData[]>([])
  const [connected, setConnected] = useState(false)
  const [socket, setSocket] = useState<MockWebSocket | null>(null)
  
  const connectWebSocket = () => {
    const newSocket = apiClient.createStockWebSocket()
    
    newSocket.on('open', () => {
      setConnected(true)
    })
    
    newSocket.on('message', (event: { data: string }) => {
      const data = JSON.parse(event.data)
      setStocks(data.stocks)
    })
    
    newSocket.on('close', () => {
      setConnected(false)
    })
    
    newSocket.connect()
    setSocket(newSocket)
  }
  
  const disconnectWebSocket = () => {
    if (socket) {
      socket.disconnect()
      setSocket(null)
    }
  }
  
  useEffect(() => {
    return () => {
      disconnectWebSocket()
    }
  }, [])
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">WebSocket API Example</h3>
        <p className="text-sm text-muted-foreground">
          Real-time data updates using WebSocket connection (simulated)
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-sm">
            {connected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
        
        <div className="flex-1" />
        
        {connected ? (
          <Button 
            variant="outline" 
            onClick={disconnectWebSocket}
            className="flex items-center gap-2"
          >
            <WifiOff className="h-4 w-4" />
            Disconnect
          </Button>
        ) : (
          <Button 
            variant="outline" 
            onClick={connectWebSocket}
            className="flex items-center gap-2"
          >
            <Wifi className="h-4 w-4" />
            Connect
          </Button>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Symbol</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Change</th>
                <th className="py-2 px-4 text-left">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {stocks.length > 0 ? (
                stocks.map(stock => (
                  <tr key={stock.symbol} className="border-b hover:bg-muted/50">
                    <td className="py-2 px-4 font-medium">{stock.symbol}</td>
                    <td className="py-2 px-4">${stock.price.toFixed(2)}</td>
                    <td className={`py-2 px-4 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </td>
                    <td className="py-2 px-4 text-sm text-muted-foreground">
                      {new Date(stock.timestamp).toLocaleTimeString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-muted-foreground">
                    {connected ? 'Waiting for data...' : 'Connect to see real-time stock updates'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Main component that combines all API examples
export function ComprehensiveApiExamples() {
  return (
    <Tabs defaultValue="rest" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="rest">REST API</TabsTrigger>
        <TabsTrigger value="graphql">GraphQL</TabsTrigger>
        <TabsTrigger value="websocket">WebSocket</TabsTrigger>
      </TabsList>
      <TabsContent value="rest" className="p-4 border rounded-md mt-4">
        <RestApiExample />
      </TabsContent>
      <TabsContent value="graphql" className="p-4 border rounded-md mt-4">
        <GraphQLApiExample />
      </TabsContent>
      <TabsContent value="websocket" className="p-4 border rounded-md mt-4">
        <WebSocketApiExample />
      </TabsContent>
    </Tabs>
  )
}