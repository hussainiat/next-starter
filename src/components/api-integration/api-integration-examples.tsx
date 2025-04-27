"use client"

import * as React from "react"
import { useState } from "react"
import { AlertCircle, Check, Loader2 } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

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

// API client with different patterns
const apiClient = {
  // Basic GET request
  async getPosts(page = 1, limit = 3): Promise<Post[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    return response.json()
  },
  
  // GET request with parameters
  async getPostById(id: number): Promise<Post> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    return response.json()
  },
  
  // GET request with relationship
  async getPostComments(postId: number): Promise<Comment[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    return response.json()
  },
  
  // POST request
  async createPost(data: Omit<Post, "id">): Promise<Post> {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    return response.json()
  },
  
  // PUT request
  async updatePost(id: number, data: Partial<Post>): Promise<Post> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    return response.json()
  },
  
  // DELETE request
  async deletePost(id: number): Promise<{}> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'DELETE',
      }
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    return response.json()
  },
}

// Basic API Example Component
function BasicApiExample() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  const fetchPosts = async (pageNumber: number) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const data = await apiClient.getPosts(pageNumber)
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      console.error('Fetch error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchPosts(page)
  }, [page])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Basic GET Request</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => fetchPosts(page)} 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </>
          ) : (
            "Refresh"
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isLoading ? (
        <div className="flex justify-center py-4">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{post.title}</CardTitle>
                <CardDescription>Post ID: {post.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1 || isLoading}
        >
          Previous
        </Button>
        <span className="py-2">Page {page}</span>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setPage(p => p + 1)}
          disabled={isLoading}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// Create Post Example Component
function CreatePostExample() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [result, setResult] = useState<Post | null>(null)

  const handleCreatePost = async () => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    setResult(null)
    
    try {
      // Example post data
      const postData = {
        title: 'New Post Example',
        body: 'This is an example of creating a new post using a POST request.',
        userId: 1
      }
      
      const data = await apiClient.createPost(postData)
      setResult(data)
      setSuccess('Post created successfully!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      console.error('Create post error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">POST Request Example</h3>
        <Button 
          variant="default" 
          size="sm" 
          onClick={handleCreatePost} 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Post"
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert variant="default" className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{result.title}</CardTitle>
            <CardDescription>
              <Badge variant="outline" className="mr-2">ID: {result.id}</Badge>
              <Badge variant="outline">User ID: {result.userId}</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{result.body}</p>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Note: This is a mock API. The resource won't actually be created on the server.
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

// Update Post Example Component
function UpdatePostExample() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [result, setResult] = useState<Post | null>(null)

  const handleUpdatePost = async () => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    setResult(null)
    
    try {
      // Example update data for post with ID 1
      const postId = 1
      const updateData = {
        title: 'Updated Post Title',
        body: 'This post has been updated using a PUT request.',
      }
      
      const data = await apiClient.updatePost(postId, updateData)
      setResult(data)
      setSuccess('Post updated successfully!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      console.error('Update post error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">PUT Request Example</h3>
        <Button 
          variant="default" 
          size="sm" 
          onClick={handleUpdatePost} 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            "Update Post"
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert variant="default" className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-base">{result.title}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="mr-2">ID: {result.id}</Badge>
                  <Badge variant="outline">User ID: {result.userId}</Badge>
                </CardDescription>
              </div>
              <Badge>Updated</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{result.body}</p>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Note: This is a mock API. The resource won't actually be updated on the server.
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

// Delete Post Example Component
function DeletePostExample() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleDeletePost = async () => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      // Example delete post with ID 1
      const postId = 1
      await apiClient.deletePost(postId)
      setSuccess(`Post with ID ${postId} deleted successfully!`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      console.error('Delete post error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">DELETE Request Example</h3>
        <Button 
          variant="destructive" 
          size="sm" 
          onClick={handleDeletePost} 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deleting...
            </>
          ) : (
            "Delete Post"
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert variant="default" className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

// Main API Integration Examples Component
export function ApiIntegrationExamples() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>API Integration Examples</CardTitle>
        <CardDescription>
          Examples of different API request patterns using JSONPlaceholder API
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="get" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="get">GET</TabsTrigger>
            <TabsTrigger value="post">POST</TabsTrigger>
            <TabsTrigger value="put">PUT</TabsTrigger>
            <TabsTrigger value="delete">DELETE</TabsTrigger>
          </TabsList>
          <TabsContent value="get" className="mt-4">
            <BasicApiExample />
          </TabsContent>
          <TabsContent value="post" className="mt-4">
            <CreatePostExample />
          </TabsContent>
          <TabsContent value="put" className="mt-4">
            <UpdatePostExample />
          </TabsContent>
          <TabsContent value="delete" className="mt-4">
            <DeletePostExample />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}