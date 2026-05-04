# FUJI International Consultancy — Next.js Website

A modern, professional consultancy website built with Next.js (JavaScript only), featuring:

## 🎨 Brand
- **Primary**: `#E10600` (FUJI Red)
- **Dark**: `#111111`
- **Fonts**: Syne (headings) + DM Sans (body)

## 📁 Project Structure

```
fuji-consultancy/
├── components/
│   ├── Navbar.js / Navbar.module.css
│   ├── Footer.js / Footer.module.css
│   ├── Button.js / Button.module.css
│   └── ServiceCard.js / ServiceCard.module.css
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js          ← Home
│   ├── about.js
│   ├── services.js
│   └── contact.js
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── About.module.css
│   ├── Services.module.css
│   └── Contact.module.css
├── next.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production + static export
npm run build
```

## ✨ Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero + stats + service preview + CTA |
| About | `/about` | Story, timeline, mission/vision, values, team |
| Services | `/services` | 9 practice areas, industries, process |
| Contact | `/contact` | Form + office locations + direct contact |

## 🧩 Components

### `<Button>` Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `variant` | string | `primary` | `primary`, `secondary`, `ghost`, `dark` |
| `size` | string | `md` | `sm`, `md`, `lg` |
| `href` | string | — | Any valid URL |
| `arrow` | bool | `false` | Shows animated `→` |

### `<ServiceCard>` Props
| Prop | Type | Description |
|------|------|-------------|
| `icon` | string | Emoji or symbol |
| `title` | string | Service name |
| `description` | string | Short description |
| `index` | number | Stagger delay index |
| `featured` | bool | Dark card variant |

## 🎯 Design Decisions

- **Syne** font for headings — geometric, modern, distinctive
- **DM Sans** for body — warm and legible at small sizes
- CSS Grid for all layouts — no external grid libraries
- CSS Modules for scoped styles — zero style conflicts
- Sticky navbar that becomes opaque/blurred on scroll
- Hero page class pattern for transparent-to-opaque navbar
- Subtle grid background pattern on dark hero
- Animated timeline on About page
- 4-step process visualization on Services page
- Form with loading spinner and success state on Contact

## 📱 Responsive Breakpoints

- `> 960px` — Full desktop layout
- `640–960px` — Tablet adaptations
- `< 640px` — Mobile stack

## 🔧 Static Export Config

`next.config.js` is pre-configured for static export:
```js
output: 'export'
trailingSlash: true
images.unoptimized: true
```

This makes the site fully deployable to any static host (Vercel, Netlify, GitHub Pages, AWS S3, etc.).
