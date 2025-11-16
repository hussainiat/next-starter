# 🚀 Next.js Enterprise Starter Kit

A production-ready, feature-rich starter kit for building modern web applications with the latest web technologies. Built with performance, developer experience, and scalability in mind.

## ✨ What's New

- **Next.js 16.0.3** - Latest major version with enhanced performance and features
- **React 19.2.0** - Latest React with improved concurrent features
- **TypeScript 5.9.3** - Enhanced type safety and developer experience
- **Zod 4.1.12** - Major upgrade with improved schema validation
- **Recharts 3.4.1** - Latest data visualization library
- **All Radix UI components updated** - Latest accessible UI components
- **Zero security vulnerabilities** - All packages updated to secure versions

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 16.0.3](https://nextjs.org/)** - React framework with App Router, React Server Components, and Turbopack
- **[React 19.2.0](https://reactjs.org/)** - UI library with concurrent features and automatic batching
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type-safe JavaScript with enhanced IDE support

### Styling & UI
- **[Tailwind CSS 4.1.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Headless accessible UI components (latest versions)
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful, customizable components
- **[Lucide React 0.553.0](https://lucide.dev/)** - Beautiful & consistent icon pack

### Forms & Validation
- **[React Hook Form 7.66.0](https://react-hook-form.com/)** - Performant forms with minimal re-renders
- **[Zod 4.1.12](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers 5.2.2](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Data Visualization
- **[Recharts 3.4.1](https://recharts.org/)** - Composable charting library
- **[TanStack Table 8.21.3](https://tanstack.com/table)** - Headless UI table library

### Development Tools
- **[ESLint 9.39.1](https://eslint.org/)** - Code linting with Next.js configuration
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type checking and IntelliSense

### Additional Features
- **[Date-fns 4.1.0](https://date-fns.org/)** - Modern date utility library
- **[Sonner 2.0.7](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Next Themes 0.4.6](https://github.com/pacocoursey/next-themes)** - Dark mode support
- **[React Day Picker 9.11.1](https://react-day-picker.js.org/)** - Date picker component

## 🚀 Features

### 🎨 UI/UX
- **🌙 Dark Mode** - Built-in dark mode support with system preference detection
- **📱 Responsive Design** - Mobile-first, fully responsive layouts
- **♿ Accessibility** - WCAG compliant components with ARIA support
- **🎯 Type Safety** - Full TypeScript support with strict mode

### 📊 Data Management
- **📈 Interactive Charts** - Multiple chart types with Recharts
- **📋 Advanced Tables** - Sortable, filterable, and searchable data tables
- **📤 Form Handling** - Comprehensive form examples with validation
- **🔍 Search & Filter** - Advanced search and filtering capabilities

### 🔐 Security & Performance
- **⚡ Turbopack** - Lightning-fast development builds
- **🔒 Security Headers** - Configured security headers
- **📦 Optimized Bundles** - Automatic code splitting and optimization
- **🚀 Static Generation** - Optimized for performance with SSG

### 🛠️ Developer Experience
- **🔥 Hot Reload** - Instant feedback during development
- **📝 ESLint + Prettier** - Code formatting and linting
- **🎯 TypeScript** - Full type safety and IntelliSense
- **📁 Organized Structure** - Clean, scalable project structure

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn 1.22+

### Quick Start
```bash
# Clone the repository
git clone https://github.com/hussainiat/next-starter.git

# Navigate to project directory
cd next-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

### Alternative Installation (if you encounter peer dependency issues)
```bash
npm install --legacy-peer-deps
```

## 🚦 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run dev:old      # Start development server without Turbopack

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript compiler check

# Utilities
npm run clean        # Clean build cache and .next folder
npm run analyze      # Analyze bundle size
```

## 📁 Project Structure

```
├── public/                    # Static assets
│   ├── favicon.ico           # Website favicon
│   └── *.svg                 # Static SVG images
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── components/       # App-specific components
│   │   ├── documentation/    # Documentation pages
│   │   ├── examples/       # Example implementations
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/           # Reusable components
│   │   ├── auth/            # Authentication components
│   │   ├── data-visualization/ # Charts and graphs
│   │   ├── ui/              # Shadcn/ui components
│   │   ├── footer.tsx       # Site footer
│   │   ├── header.tsx       # Site header
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── theme-toggle.tsx  # Dark mode toggle
│   ├── hooks/               # Custom React hooks
│   │   └── use-mobile.ts    # Mobile detection hook
│   └── lib/                 # Utility functions
│       └── utils.ts         # Helper functions
├── .eslintrc.json          # ESLint configuration
├── components.json         # Shadcn/ui configuration
├── eslint.config.mjs       # New ESLint flat config
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Component Examples

### Data Visualization
- **Interactive Charts** - Bar, line, area, and pie charts with tooltips
- **Responsive Charts** - Mobile-optimized chart components
- **Real-time Updates** - Dynamic data visualization examples

### Form Components
- **Login Forms** - Complete authentication forms with validation
- **Registration Forms** - User registration with password strength
- **Advanced Forms** - Multi-step forms with conditional fields
- **Form Validation** - Zod schema validation examples

### UI Components
- **Data Tables** - Sortable, searchable, and filterable tables
- **Modals & Dialogs** - Accessible modal components
- **Navigation** - Responsive navigation components
- **Cards & Layouts** - Flexible layout components

### API Integration
- **CRUD Operations** - Complete CRUD examples
- **Error Handling** - Proper error handling patterns
- **Loading States** - Skeleton loaders and spinners
- **Pagination** - Server-side pagination examples

## 🔧 Configuration

### Next.js Configuration
The `next.config.js` file includes:
- Turbopack configuration for fast builds
- TypeScript compilation settings
- Security optimizations

### Tailwind CSS Configuration
The `tailwind.config.ts` includes:
- Custom color palette
- Extended spacing scale
- Component class patterns
- Dark mode support

### TypeScript Configuration
The `tsconfig.json` includes:
- Strict type checking
- Path aliases for clean imports
- Modern JavaScript features
- IDE optimization settings

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify** - Connect your GitHub repo
- **Railway** - One-click deployment
- **Digital Ocean** - App Platform deployment

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

### Test Structure
- Unit tests for utility functions
- Component tests with React Testing Library
- Integration tests for API routes
- E2E tests with Playwright (optional)

## 🐛 Troubleshooting

### Common Issues

**1. Build fails with TypeScript errors**
```bash
# Check TypeScript configuration
npm run type-check

# Fix auto-fixable issues
npm run lint:fix
```

**2. Peer dependency warnings**
```bash
# Use legacy peer deps flag
npm install --legacy-peer-deps
```

**3. Development server won't start**
```bash
# Clear cache and restart
npm run clean
npm run dev
```

**4. Icons not loading**
- Ensure Lucide React is properly installed
- Check import statements for correct icon names

### Performance Issues
- Use React DevTools Profiler to identify re-renders
- Check bundle size with `npm run analyze`
- Optimize images and static assets

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Write tests for new features
- Update documentation as needed
- Ensure all CI checks pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Shadcn](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you have any questions or need help:
- 📧 Email: your-email@example.com
- 💬 Discord: [Join our community](https://discord.gg/your-server)
- 🐛 Issues: [Report bugs here](https://github.com/hussainiat/next-starter/issues)

---

**⭐ Star this repo if you find it helpful!**
