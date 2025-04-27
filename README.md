# Next.js Enterprise Starter Kit

A production-ready, feature-rich starter kit for building modern web applications with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15+** - The React framework for production with App Router and React Server Components
- **TypeScript** - Type safety and improved developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Shadcn UI** - High-quality, accessible UI components built with Radix UI and Tailwind CSS
- **Dark Mode** - Built-in dark mode support with next-themes
- **Form Handling** - Integrated with react-hook-form and zod for powerful form validation
- **Data Visualization** - Beautiful charts and graphs with Recharts
- **Data Tables** - Powerful data tables with TanStack Table
- **API Integration** - Examples of different API request patterns
- **Authentication** - Authentication patterns and form handling examples
- **Toast Notifications** - Toast notifications with Sonner
- **Responsive Design** - Mobile-first responsive design
- **Accessibility** - Accessible components and best practices

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/next-enterprise-starter.git
cd next-enterprise-starter
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── components/ # App-specific components
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # Shared components
│   │   ├── auth/       # Authentication components
│   │   └── ui/         # UI components
│   ├── hooks/          # Custom hooks
│   └── lib/            # Utility functions
├── .gitignore
├── components.json     # Shadcn UI configuration
├── next.config.ts      # Next.js configuration
├── package.json
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Component Examples

### Data Visualization

The starter kit includes examples of data visualization with Recharts:

- **Basic Chart** - A simple bar chart example
- **Advanced Chart** - Interactive charts with multiple visualization options (bar, line, area, pie)

### API Integration

Examples of different API request patterns:

- **GET** - Basic GET request with pagination
- **POST** - Create new resources
- **PUT** - Update existing resources
- **DELETE** - Delete resources

### Authentication

Authentication patterns and form handling examples:

- **Login** - Basic login form with validation
- **Registration** - User registration form with validation
- **Password Reset** - Password reset form
- **Advanced Auth** - Reusable authentication component with login and signup tabs

### Form Handling

Powerful form handling with react-hook-form and zod validation:

- **Basic Form** - Simple form with validation
- **Advanced Form** - Complex form with multiple fields and validation

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
