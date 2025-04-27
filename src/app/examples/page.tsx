import { Metadata } from "next";
import { AdvancedChart } from "@/components/data-visualization/advanced-chart";
import { ApiIntegrationExamples } from "@/components/api-integration/api-integration-examples";
import { AuthExamples } from "@/components/auth/auth-examples";
import { ExampleDataTable } from "@/components/data-visualization/example-data-table";
import { AdvancedDataVisualization } from "@/components/data-visualization/advanced-charts";
import { ComprehensiveApiExamples } from "@/components/api-integration/comprehensive-api-examples";
import { EnhancedAuthShowcase } from "@/components/auth/enhanced-auth-showcase";
import { InteractiveCharts } from "@/components/data-visualization/interactive-charts";

export const metadata: Metadata = {
  title: "Examples | Next.js Enterprise Starter Kit",
  description: "Example components and features of the Next.js Enterprise Starter Kit",
};

export default function ExamplesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Examples</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the components and features of the Next.js Enterprise Starter Kit
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Interactive Data Visualization Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Interactive Data Visualization</h2>
            <p className="text-muted-foreground">
              Advanced interactive charts with customizable options, filters and animations
            </p>
          </div>
          <InteractiveCharts />
        </section>

        {/* Advanced Data Visualization Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Advanced Data Visualization</h2>
            <p className="text-muted-foreground">
              Interactive charts and graphs with multiple visualization options and data filtering
            </p>
          </div>
          <AdvancedDataVisualization />
        </section>

        {/* Basic Data Visualization Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Basic Data Visualization</h2>
            <p className="text-muted-foreground">
              Simple interactive charts and graphs for data visualization
            </p>
          </div>
          <AdvancedChart />
        </section>

        {/* Comprehensive API Integration Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Comprehensive API Integration</h2>
            <p className="text-muted-foreground">
              Examples of REST, GraphQL, and WebSocket API patterns
            </p>
          </div>
          <ComprehensiveApiExamples />
        </section>

        {/* Basic API Integration Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Basic API Integration</h2>
            <p className="text-muted-foreground">
              Examples of different API request patterns
            </p>
          </div>
          <ApiIntegrationExamples />
        </section>

        {/* Enhanced Authentication Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Enhanced Authentication</h2>
            <p className="text-muted-foreground">
              Advanced authentication with social login and multi-factor authentication
            </p>
          </div>
          <EnhancedAuthShowcase />
        </section>

        {/* Basic Authentication Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Basic Authentication</h2>
            <p className="text-muted-foreground">
              Authentication patterns and form handling examples
            </p>
          </div>
          <AuthExamples />
        </section>

        {/* Data Table Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Data Tables</h2>
            <p className="text-muted-foreground">
              Powerful data tables with sorting, filtering, and pagination
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <ExampleDataTable />
          </div>
        </section>
      </div>
    </div>
  );
}