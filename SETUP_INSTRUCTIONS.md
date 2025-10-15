# Spectralysium Website Setup Instructions

## Quick Setup (Run these commands in order)

### 1. Install shadcn/ui components
```bash
cd C:\PROJECT\SPEKTRAL\WEBSITE_SPECTRALYSIUM\spectralysium
npx shadcn@latest add button card badge input textarea accordion navigation-menu dialog separator tooltip skeleton toast -y
```

### 2. Install additional dependencies
```bash
npm install next-intl @next/mdx @mdx-js/react gray-matter reading-time @supabase/supabase-js resend zod react-hook-form @hookform/resolvers three @react-three/fiber @react-three/drei
```

### 3. Create .env.local file
Create a file named `.env.local` in the root directory with:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE=your_service_role_key
RESEND_API_KEY=your_resend_api_key
```

### 4. Run the development server
```bash
npm run dev
```

Visit http://localhost:3000

## What's Been Created

I've created all the necessary files for your Spectralysium website including:
- Dark-first theme configuration
- Complete page structure (Home, Showcase, Platform, Consulting, Services, Contact, Insights, Invest, Demos)
- Reusable components (Header, Footer, Hero, Cards, etc.)
- API routes for contact form
- i18n support for EN/ID
- MDX configuration for content

## Next Steps After Setup

1. Customize the content in each page component
2. Add your actual logo and brand assets
3. Configure Supabase database tables
4. Set up Resend email service
5. Add real project content to the showcase
6. Deploy to Vercel

## Folder Structure

```
src/
├── app/
│   ├── (marketing)/         # Main website pages
│   │   ├── page.tsx         # Home
│   │   ├── showcase/
│   │   ├── platform/
│   │   ├── consulting/
│   │   ├── services/
│   │   ├── insights/
│   │   ├── invest/
│   │   ├── contact/
│   │   └── demo/
│   │       ├── volumetric/
│   │       └── avatar/
│   ├── api/
│   │   ├── contact/
│   │   └── og/
│   └── globals.css
├── components/              # Reusable UI components
│   ├── ui/                 # shadcn components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   └── ...
├── lib/                    # Utilities
│   ├── utils.ts
│   ├── supabase.ts
│   └── mdx.ts
└── content/                # MDX content
    ├── posts/
    └── cases/
```

## Need Help?

If you encounter any issues:
1. Make sure Node.js 20+ is installed
2. Delete node_modules and package-lock.json, then run `npm install` again
3. Check that all environment variables are set correctly
4. Ensure ports 3000 is not in use

Happy coding! 🚀
