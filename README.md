# Spectralysium Website

A modern, dark-first website for Spectralysium - Indonesia's creative-tech engine for film, XR, and IP.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript
- **Fonts:** Inter, Space Grotesk
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Features

- 🎨 Dark-first design with custom color palette
- ⚡ Fast, optimized performance
- 📱 Fully responsive
- ♿ Accessible components
- 🌐 Ready for i18n (EN/ID)
- 🎬 Showcase portfolio
- 💼 Service pages
- 📝 Contact form
- 🎭 Interactive demos (Volumetric, Avatar)

## Pages

- **Home** (`/`) - Hero, metrics, three pillars, platform snapshot
- **Showcase** (`/showcase`) - Filterable project portfolio
- **Platform** (`/platform`) - IPRAY platform overview
- **Consulting** (`/consulting`) - Media, Technology, F&B consulting
- **Services** (`/services`) - VFX, Volumetric, AR/VR, AI, IP services
- **Insights** (`/insights`) - Blog and articles
- **Invest** (`/invest`) - Investment information
- **Contact** (`/contact`) - Contact form
- **Demo: Volumetric** (`/demo/volumetric`) - 4DViews player demo
- **Demo: Avatar** (`/demo/avatar`) - Conversational avatar demo
- **Careers** (`/careers`) - Job openings

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

1. Clone the repository (or you already have it)

2. Install dependencies:
```bash
npm install
```

3. Install shadcn/ui components:
```bash
npx shadcn@latest add button card badge input textarea accordion navigation-menu dialog separator tooltip skeleton toast -y
```

4. Copy environment variables:
```bash
cp .env.local.example .env.local
```

5. Update `.env.local` with your actual values

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── (marketing)/        # Marketing pages group
│   │   ├── layout.tsx      # Header + Footer layout
│   │   ├── page.tsx        # Home page
│   │   ├── showcase/
│   │   ├── platform/
│   │   ├── consulting/
│   │   ├── services/
│   │   ├── insights/
│   │   ├── invest/
│   │   ├── contact/
│   │   ├── careers/
│   │   └── demo/
│   │       ├── volumetric/
│   │       └── avatar/
│   ├── api/                # API routes (future)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── site-logo.tsx
│   ├── hero.tsx
│   ├── metrics.tsx
│   └── pillar-cards.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Color Palette

- **Background:** `#0B0D10` (near-black)
- **Surface:** `#101319`
- **Primary:** `#00E5FF` (electric cyan)
- **Secondary:** `#FF3FD1` (magenta)
- **Accent:** `#FFB800` (warm amber)
- **Text Primary:** `#E6EAF2`
- **Text Secondary:** `#9AA5B1`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Build the project and deploy the `.next` output to any Node.js hosting platform.

## Future Enhancements

- [ ] Add i18n with next-intl (EN/ID toggle)
- [ ] Integrate Supabase for forms and content
- [ ] Add MDX support for blog posts
- [ ] Implement actual volumetric player (web4dv)
- [ ] Add real avatar demo with WebRTC
- [ ] Create admin dashboard
- [ ] Add analytics (Vercel Analytics + Plausible)
- [ ] Implement search functionality
- [ ] Add case study detail pages

## License

© 2025 Spectralysium. All rights reserved.

## Support

For questions or support, contact: hello@spectralysium.com
