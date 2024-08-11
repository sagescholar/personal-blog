# Development Guide

This document provides instructions for setting up the development environment and contributing to the project.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

## Setting Up the Development Environment

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies:

npm install

3. Set up Supabase:
- Create a new project on [Supabase](https://supabase.com)
- Create a new table named `posts` with the following columns:
  - `id` (int8, primary key)
  - `title` (text)
  - `content` (text)
  - `created_at` (timestamptz, default: now())
- Get your API keys from the project settings

4. Create a `.env.local` file in the root directory with your Supabase credentials:
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

5. Start the development server:
npm run dev

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/`: Next.js app directory
- `components/`: React components
- `lib/`: Utility functions and modules
- `page.tsx`: Home page
- `posts/[id]/page.tsx`: Individual post page
- `public/`: Static assets

## Coding Standards

- Use TypeScript for type safety
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use functional components and hooks
- Write meaningful commit messages

## Testing

Run tests with:

npm run test

## Deployment

Deployment is handled automatically by Vercel when changes are pushed to the main branch. To deploy manually:

1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` to deploy
3. Run `vercel --prod` to deploy to production

## Troubleshooting

If you encounter any issues, please check the [issue tracker](https://github.com/your-username/your-repo-name/issues) or create a new issue.

whxpWGzDrSVYIn3A
