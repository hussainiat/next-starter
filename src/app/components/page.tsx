"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExampleChart } from "@/components/data-visualization/example-chart"
import { ExampleDataTable } from "@/components/data-visualization/example-data-table"
import { ApiExample } from "@/components/api-integration/api-example"
import { AuthForm } from "@/components/auth/auth-form"

export default function ComponentsPage() {
  return (
    <div className="container py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Component Showcase</h1>
        <p className="text-muted-foreground">A collection of reusable components for your Next.js application.</p>
      </div>

      <Tabs defaultValue="data-visualization" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="data-visualization">Data Visualization</TabsTrigger>
          <TabsTrigger value="data-table">Data Table</TabsTrigger>
          <TabsTrigger value="api-integration">API Integration</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
        </TabsList>
        
        <TabsContent value="data-visualization" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart Example</CardTitle>
              <CardDescription>
                A responsive bar chart built with Recharts that adapts to your theme.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExampleChart />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="data-table" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Table Example</CardTitle>
              <CardDescription>
                A feature-rich data table with sorting, filtering, and pagination.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExampleDataTable />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api-integration" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integration Example</CardTitle>
              <CardDescription>
                Demonstrates fetching and displaying data from an external API with loading states and error handling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ApiExample />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="authentication" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Forms</CardTitle>
              <CardDescription>
                Ready-to-use login and signup forms with validation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AuthForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}