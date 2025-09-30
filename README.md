# Personal Portfolio Website

A modern, unique portfolio website built with Next.js, TypeScript, Tailwind CSS, and React Three Fiber for 3D components.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Animations**: Smooth animations using Framer Motion
- **3D Components**: Ready to add 3D elements with React Three Fiber
- **Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Built-in Next.js SEO features
- **Dark Mode**: Automatic dark mode support
- **Sections**:
  - Hero section with animated introduction
  - About Me with skills showcase
  - Portfolio projects grid
  - Accomplishments timeline
  - Contact section

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### 1. Update Personal Information

Edit the following files with your information:

- `src/components/Hero.tsx` - Your name and title
- `src/components/About.tsx` - Your bio and skills
- `src/components/Portfolio.tsx` - Your projects
- `src/components/Accomplishments.tsx` - Your achievements
- `src/components/Contact.tsx` - Your contact links
- `src/app/layout.tsx` - Meta information

### 2. Add Your Own 3D Components

The project includes React Three Fiber. You can easily add 3D components:

```tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Add your 3D component
```

Check out:
- [React Three Fiber Examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)
- [Drei Components](https://github.com/pmndrs/drei)
- [Three.js Journey](https://threejs-journey.com/)

### 3. Add Custom React Components

Simply create new components in `src/components/` and import them in your pages.

## 🚀 Deployment Options (Free & Easy)

### Option 1: Vercel (Recommended) ⭐

**Easiest and fastest deployment for Next.js**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**That's it!** Your site will be live in under 2 minutes.

- ✅ Automatic deployments on every push
- ✅ Custom domain support
- ✅ Free SSL certificate
- ✅ Built-in analytics
- ✅ Edge network (super fast)

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

### Option 3: Cloudflare Pages

1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Output directory: `.next`
6. Deploy

## 📊 Quick Comparison

| Platform | Speed | Setup Time | Best For |
|----------|-------|------------|----------|
| **Vercel** | ⚡⚡⚡ | 2 min | Next.js (native) |
| **Netlify** | ⚡⚡ | 3 min | All frameworks |
| **Cloudflare** | ⚡⚡⚡ | 5 min | Global reach |

## 🎯 Recommended: Use Vercel

For Next.js projects, Vercel is the clear winner:
- Created by the Next.js team
- Zero configuration needed
- Automatic optimizations
- Best performance

## 📝 Pre-Deployment Checklist

- [ ] Update all placeholder text with your information
- [ ] Add your projects to Portfolio section
- [ ] Update contact links (email, GitHub, LinkedIn)
- [ ] Replace placeholder images
- [ ] Update meta tags in `layout.tsx`
- [ ] Test responsiveness on mobile
- [ ] Run `npm run build` to check for errors

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: React Three Fiber + Drei + Three.js
- **Deployment**: Vercel (recommended)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
