# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Parthenon Diner, a family restaurant with two Connecticut locations (Branford and Old Saybrook). The site features a homepage with restaurant info and a detailed menu page.

## Development Commands

```bash
# Start local development server
python3 -m http.server 8080

# Then open http://localhost:8080 in browser
```

No build step, linting, or tests - this is a static HTML/CSS/JS site with no dependencies.

## Architecture

### Pages
- `index.html` - Homepage with hero, about, menu preview, locations, and footer
- `menu.html` - Full menu with tabbed navigation (Breakfast, Lunch, Dinner, Greek, Drinks)

### Styles
- `css/styles.css` - Main stylesheet with CSS custom properties, all shared components
- `css/menu.css` - Menu page-specific styles (tabs, menu items, categories)

CSS uses custom properties defined in `:root` for colors (`--color-primary: #8B1538`), typography (Playfair Display for headings, DM Sans for body), spacing, and shadows.

### JavaScript
- `js/main.js` - Shared functionality: mobile nav toggle, smooth scroll, header scroll effect, scroll animations, order dropdown behavior
- `js/menu.js` - Menu page tab switching with URL hash support, keyboard navigation

### Key Patterns
- Mobile-first responsive design with breakpoints at 640px, 768px, 1024px, 1200px
- `.animate-on-scroll` class with IntersectionObserver for scroll-triggered animations
- Order buttons use dropdown menus linking to external ordering systems (Toast for both locations)
- Menu tabs controlled via `data-tab` attributes and URL hash routing

### External Integrations
- Google Fonts (Playfair Display, DM Sans)
- Google Maps embeds for location cards
- Toast Tab (online ordering for both locations)
