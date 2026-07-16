This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
sanggar-pelita-medan
├─ AGENTS.md
├─ CLAUDE.md
├─ components.json
├─ eslint.config.mjs
├─ middleware.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ logo
│  │  └─ logo.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ actions
│  │  └─ article.ts
│  ├─ app
│  │  ├─ (auth)
│  │  │  └─ login
│  │  │     └─ page.tsx
│  │  ├─ (dashboard)
│  │  │  └─ admin
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ (public)
│  │  │  ├─ kegiatan
│  │  │  └─ page.tsx
│  │  ├─ api
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ article
│  │  │  ├─ article-dialog.tsx
│  │  │  └─ article-form.tsx
│  │  ├─ auth
│  │  │  └─ login-form.tsx
│  │  ├─ dashboard
│  │  │  ├─ app-header.tsx
│  │  │  ├─ app-sidebar.tsx
│  │  │  ├─ dashboard-article-list.tsx
│  │  │  ├─ dashboard-empty.tsx
│  │  │  └─ dashboard-stats.tsx
│  │  ├─ home
│  │  │  ├─ about-section.tsx
│  │  │  ├─ hero-section.tsx
│  │  │  └─ latest-activities.tsx
│  │  ├─ layout
│  │  │  ├─ footer.tsx
│  │  │  └─ navbar.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ dialog.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ radio-group.tsx
│  │     └─ textarea.tsx
│  ├─ hooks
│  ├─ lib
│  │  ├─ supabase
│  │  │  ├─ actions
│  │  │  │  └─ logout.ts
│  │  │  ├─ client.ts
│  │  │  ├─ middleware.ts
│  │  │  └─ server.ts
│  │  └─ utils.ts
│  ├─ services
│  │  ├─ article.service.ts
│  │  └─ article.ts
│  ├─ types
│  │  └─ article.ts
│  └─ utils
└─ tsconfig.json

```
```
sanggar-pelita-medan
├─ AGENTS.md
├─ CLAUDE.md
├─ components.json
├─ eslint.config.mjs
├─ middleware.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ logo
│  │  └─ logo.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ actions
│  │  └─ article.ts
│  ├─ app
│  │  ├─ (auth)
│  │  │  └─ login
│  │  │     └─ page.tsx
│  │  ├─ (dashboard)
│  │  │  └─ admin
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ (public)
│  │  │  ├─ kegiatan
│  │  │  └─ page.tsx
│  │  ├─ api
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ article
│  │  │  ├─ article-dialog.tsx
│  │  │  └─ article-form.tsx
│  │  ├─ auth
│  │  │  └─ login-form.tsx
│  │  ├─ dashboard
│  │  │  ├─ app-header.tsx
│  │  │  ├─ app-sidebar.tsx
│  │  │  ├─ dashboard-article-list.tsx
│  │  │  ├─ dashboard-empty.tsx
│  │  │  └─ dashboard-stats.tsx
│  │  ├─ home
│  │  │  ├─ about-section.tsx
│  │  │  ├─ hero-section.tsx
│  │  │  └─ latest-activities.tsx
│  │  ├─ layout
│  │  │  ├─ footer.tsx
│  │  │  └─ navbar.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ dialog.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ radio-group.tsx
│  │     └─ textarea.tsx
│  ├─ hooks
│  ├─ lib
│  │  ├─ supabase
│  │  │  ├─ actions
│  │  │  │  └─ logout.ts
│  │  │  ├─ client.ts
│  │  │  ├─ middleware.ts
│  │  │  └─ server.ts
│  │  └─ utils.ts
│  ├─ services
│  │  ├─ article.service.ts
│  │  └─ article.ts
│  ├─ types
│  │  └─ article.ts
│  └─ utils
└─ tsconfig.json

```

## Development Environment

This project can be developed using GitHub Codespaces.

Required environment variables:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY