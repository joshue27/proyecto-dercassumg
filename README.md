# Vite React TS Application

This is a modern web application template built with **Vite**, **React**, and **TypeScript**. 
It includes a pre-configured setup with **Tailwind CSS** and **shadcn/ui** components for rapid development.

## Features

- **Vite** - Next Generation Frontend Tooling
- **React** - A JavaScript library for building user interfaces
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautifully designed components built with Radix UI and Tailwind CSS
- **React Router** - Declarative routing for React applications
- **React Query** - Powerful asynchronous state management
- **Playwright** - Reliable end-to-end testing for modern web apps

## Getting Started

### Prerequisites

- Node.js installed on your local machine (v18 or higher recommended)
- `npm` for package management

### Installation

1. Clone or download the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies:

```sh
npm install
```

### Development Server

Start the Vite development server with hot-module replacement:

```sh
npm run dev
```

The application will be available at `http://localhost:8080/`.

### Building for Production

To create a production-ready build:

```sh
npm run build
```

This will generate an optimized build in the `dist` directory.

To preview the production build locally:

```sh
npm run preview
```

### Testing

Run unit tests with Vitest:

```sh
npm run test
```

## Structure

- `src/` - Application source code
  - `components/` - Reusable UI components
  - `pages/` - Application pages mapped to standard routes
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `main.tsx` - Application entry point
- `public/` - Static assets copied directly to the build
- `e2e/` - End-to-end tests
