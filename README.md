# Sanggar Pelita Medan

Website profil dan Content Management System (CMS) ringan untuk **Sanggar Pelita Medan**, sebuah ruang berbagi dan bertumbuh bersama yang berfokus pada kegiatan pendidikan, relawan, dan kolaborasi.

Website ini dirancang dengan pendekatan minimalis, responsif, dan mudah dikelola untuk kebutuhan publikasi kegiatan Sanggar.

## Features

### Public Website

- Homepage profil Sanggar Pelita Medan
- Tentang Sanggar
- Relawan dan struktur tim
- Halaman kolaborasi
- Daftar kegiatan/artikel
- Detail kegiatan dengan rich text content
- Responsive layout untuk desktop dan mobile
- Custom 404 page
- SEO foundation
- Sitemap dan robots configuration

### Admin Dashboard

- Protected admin authentication
- Dashboard overview
- Create article
- Edit article
- Delete article
- Publish/unpublish content
- Upload dan preview gambar
- Automatic image lifecycle handling
- Team member management
- Upload dan preview foto relawan
- Rich Text Editor untuk artikel
- Validation dan feedback pada form

## Tech Stack

- **Next.js 16.2.11** - App Router
- **React 19.2.4**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Supabase**
  - Authentication
  - PostgreSQL database
  - Storage
- **Tiptap** - Rich Text Editor
- **DOMPurify** - HTML sanitization
- **Lucide React** - Icons
- **Vercel** - Deployment

## Project Structure

Struktur utama project:

```text
src/
|-- actions/          # Server actions
|-- app/
|   |-- (auth)/       # Authentication pages
|   |-- (dashboard)/  # Protected admin area
|   `-- (public)/     # Public website pages
|-- components/
|   |-- article/      # Article components
|   |-- auth/         # Authentication components
|   |-- dashboard/    # Dashboard components
|   |-- home/         # Homepage sections
|   |-- layout/       # Navbar and footer
|   `-- ui/           # Reusable UI components
|-- hooks/            # Custom React hooks
|-- lib/
|   `-- supabase/     # Supabase clients and helpers
|-- services/         # Data access and business logic
|-- types/            # TypeScript types
`-- utils/            # Utility functions
```

## Getting Started

### Requirements

- Node.js
- npm
- Supabase project

### Installation

Clone repository:

```bash
git clone <repository-url>
cd sanggar-pelita-medan
```
Install dependencies:

```bash
npm install
```
### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Do not commit .env.local or any secret credentials to the repository.

### Run Development Server

```bash
npm run dev
```


Open:

http://localhost:3000

## Supabase

The project uses Supabase for:

- Authentication
- Article data
- Team member data
- Image and photo storage
- Row Level Security (RLS) policies

Supabase configuration must be prepared before running the application with real data.

## Quality Checks

Before committing changes, run:

```bash
npm run lint
npm run build
```

Both commands should complete successfully before deployment.

## Deployment

The application is designed to be deployed on Vercel.

Production deployment requires the following environment variables to be configured in the Vercel project:

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SITE_URL
```

After deployment, the production website should be verified through responsive and functional QA.

## Project Status

Version 1.0 - Release Preparation

The V1 scope focuses on:

- Professional public profile website
- Article/activity publishing
- Basic content management
- Team member management
- Responsive experience
- SEO foundation
- Production-ready code quality

Future improvements will be evaluated based on actual user and organizational needs rather than being added solely for feature completeness.
