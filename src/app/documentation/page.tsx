import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Next.js Enterprise Starter Kit",
  description: "Comprehensive documentation for the Next.js Enterprise Starter Kit",
};

export default function DocumentationPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Documentation</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive guide to the Next.js Enterprise Starter Kit
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Getting Started Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
            <p className="text-muted-foreground">
              Quick setup guide to get your project up and running
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <div className="space-y-4">
                <p>Clone the repository and install dependencies:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>
                    git clone https://github.com/hussainiat/next-starter.git my-project<br />
                    cd my-project<br />
                    npm install
                  </code>
                </pre>
                <p>Start the development server:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>
                    npm run dev
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Features</h2>
            <p className="text-muted-foreground">
              Key features and capabilities of the starter kit
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-2">UI Components</h3>
              <p className="text-muted-foreground">
                Beautiful, accessible UI components built with Radix UI and Tailwind CSS. The components are designed to be accessible, customizable, and easy to use.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-muted-foreground">
                Interactive charts and graphs for data visualization. Includes basic and advanced visualization components with customizable options.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-2">API Integration</h3>
              <p className="text-muted-foreground">
                Examples of REST, GraphQL, and WebSocket API patterns. Includes comprehensive API integration examples with error handling and loading states.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-2">Authentication</h3>
              <p className="text-muted-foreground">
                Authentication patterns and form handling examples. Ready for integration with your preferred auth solution.
              </p>
            </div>
          </div>
        </section>

        {/* Component Usage Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Component Usage</h2>
            <p className="text-muted-foreground">
              How to use the components included in the starter kit
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">UI Components</h3>
              <div className="space-y-4">
                <p>Import and use components in your pages:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>
                    import &#123; Button &#125; from "@/components/ui/button";<br />
                    import &#123; Card, CardContent, CardHeader, CardTitle &#125; from "@/components/ui/card";<br /><br />
                    export default function MyPage() &#123;<br />
                    &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Card&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CardHeader&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CardTitle&gt;My Card&lt;/CardTitle&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/CardHeader&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CardContent&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button&gt;Click Me&lt;/Button&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/CardContent&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Data Visualization</h3>
              <div className="space-y-4">
                <p>Implement interactive charts in your application:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>
                    import &#123; AdvancedChart &#125; from "@/components/data-visualization/advanced-chart";<br /><br />
                    export default function DashboardPage() &#123;<br />
                    &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="space-y-6"&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Sales Analytics&lt;/h2&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;AdvancedChart /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Project Structure Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Project Structure</h2>
            <p className="text-muted-foreground">
              Overview of the project directory structure
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>
                ├── public/          # Static assets<br />
                ├── src/<br />
                │   ├── app/         # App router pages<br />
                │   ├── components/  # Reusable components<br />
                │   │   ├── api-integration/  # API integration examples<br />
                │   │   ├── auth/            # Authentication components<br />
                │   │   ├── data-visualization/ # Data visualization components<br />
                │   │   └── ui/              # UI components<br />
                │   ├── lib/        # Utility functions and libraries<br />
                │   └── styles/     # Global styles<br />
                ├── .env.example    # Environment variables example<br />
                ├── next.config.js  # Next.js configuration<br />
                ├── package.json    # Project dependencies<br />
                └── tailwind.config.js # Tailwind CSS configuration
              </code>
            </pre>
          </div>
        </section>

        {/* Deployment Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Deployment</h2>
            <p className="text-muted-foreground">
              How to deploy your application to production
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Deploy on Vercel</h3>
            <p className="mb-4">The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Push your code to a Git repository (GitHub, GitLab, BitBucket)</li>
              <li>Import your repository on Vercel</li>
              <li>Vercel will detect that you're using Next.js and will set up the build configuration for you</li>
              <li>Your application will be deployed to a production URL</li>
            </ol>
            <p className="mt-4">For more details, check out the <a href="https://nextjs.org/docs/app/building-your-application/deploying" className="text-primary hover:underline">Next.js deployment documentation</a>.</p>
          </div>
        </section>

        {/* Customization Section */}
        <section className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Customization</h2>
            <p className="text-muted-foreground">
              How to customize the starter kit to fit your needs
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Styling</h3>
              <p className="mb-4">The starter kit uses Tailwind CSS for styling. You can customize the theme in the tailwind.config.js file:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>
                  // tailwind.config.js<br />
                  module.exports = &#123;<br />
                  &nbsp;&nbsp;theme: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;extend: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primary: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// your custom colors<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
                  &nbsp;&nbsp;&#125;,<br />
                  &#125;;
                </code>
              </pre>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Adding New Components</h3>
              <p>Create new components in the src/components directory following the existing patterns:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>
                  // src/components/my-feature/my-component.tsx<br /><br />
                  export function MyComponent() &#123;<br />
                  &nbsp;&nbsp;return (<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My new component<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                  &nbsp;&nbsp;);<br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}