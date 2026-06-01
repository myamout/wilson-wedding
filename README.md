# Wilson Wedding Website

A professional, elegant wedding website built with modern web technologies.

## Tech Stack

- **React 19** - Latest React with improved performance
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **shadcn/ui** - High-quality, customizable React components
- **@tailwindcss/postcss** - Modern Tailwind CSS with PostCSS integration

## Features

- ✨ Professional, elegant design with wedding-themed colors
- 📱 Fully responsive layout for all devices
- 🎨 Beautiful component library (shadcn/ui)
- 🚀 Lightning-fast development with Vite HMR
- 📦 Optimized production build
- 🎯 Path aliases for clean imports (`@/` maps to `./src/`)

## Color Palette

- **Gold** (#D4AF37) - Primary accent color
- **Rose** (#F4E4E9) - Soft secondary color
- **Deep** (#2C2C2C) - Text and heading color

## Typography

- **Headings** - Playfair Display (serif) - elegant and classic
- **Body** - Montserrat (sans-serif) - modern and clean

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```

The dev server will start at `http://localhost:5173` with hot module replacement enabled.

### Build for Production
```bash
npm run build
```

This generates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── ui/              # shadcn/ui components (Button, Card, etc.)
├── lib/
│   └── utils.ts         # Utility functions (cn for merging classes)
├── App.tsx              # Main application component
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind directives
```

## Component Examples

### Button
```tsx
import { Button } from '@/components/ui/button'

<Button>Click me</Button>
<Button variant="outline" size="lg">Large Outline Button</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

## Styling

All styling uses **Tailwind CSS**. Custom theme colors are defined in `tailwind.config.js`:

```js
colors: {
  gold: "#D4AF37",
  rose: "#F4E4E9",
  deep: "#2C2C2C",
}
```

### Custom CSS Classes

The `src/index.css` file includes custom Tailwind layers:

```css
@layer components {
  .wedding-section { /* Full-width section with padding */ }
  .wedding-container { /* Max-width container with auto margins */ }
  .gradient-gold { /* Gold gradient background */ }
}
```

## Path Aliases

Import from `src/` using the `@/` alias:

```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

This is configured in both `vite.config.ts` and `tsconfig.app.json`.

## Extending the Project

To add more shadcn/ui components:

1. Create new component files in `src/components/ui/`
2. Follow the same pattern as existing components (Button, Card)
3. Export from index files if needed
4. Import and use in your pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Cold start: ~200ms
- 🔄 HMR: Instant
- 📦 Bundle size: ~224kb (gzipped: ~70kb)
