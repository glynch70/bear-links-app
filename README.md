# Bear Media Links Page

A premium, sleek links-in-bio page for Bear Media. Built with Next.js, React, and Tailwind CSS.

## Features

✓ **Dark, premium design** — sleek and sophisticated  
✓ **Smooth animations** — staggered reveals on load  
✓ **Mobile responsive** — perfect on all devices  
✓ **Easy to update** — just edit the links array  
✓ **Fast deployment** — ready for Vercel  

## Social Links Included

- Instagram
- TikTok
- YouTube
- LinkedIn
- Facebook
- Bear Media website

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

### 3. Deploy to Vercel

**Option A: Via GitHub (recommended)**
- Push this repo to GitHub
- Connect to Vercel
- Vercel auto-deploys on each push

**Option B: Direct Vercel CLI**
```bash
npm i -g vercel
vercel
```

## Customizing Links

Edit the `links` array in `pages/index.js`:

```javascript
const links = [
  {
    id: 1,
    name: 'Your Link Name',
    url: 'https://your-url.com',
    icon: IconName,
    color: 'from-color-500 to-color-500',
    delay: 0.1,
  },
  // ... more links
];
```

Available icons from lucide-react: Instagram, Facebook, Youtube, Linkedin, Twitter, Globe, and many more.

## Setting Up the Subdomain

Once deployed to Vercel:

1. Note your Vercel deployment URL
2. Go to IONOS
3. Add DNS record:
   - **Type:** CNAME
   - **Name:** links
   - **Value:** (your Vercel URL)
4. Wait 5-10 mins for DNS to propagate

Your site will be live at **links.bear-media.com**

## Tech Stack

- **Next.js 14** — React framework
- **Tailwind CSS** — styling
- **Lucide React** — icons
- **Vercel** — hosting

---

Made for Bear Media. © 2026
