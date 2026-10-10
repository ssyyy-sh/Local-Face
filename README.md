# Local Face — Perfume Store

React + Vite + React Router DOM implementation of the "Local Face | Perfume store" Figma design.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the build
```

## Routes

| Path            | Page                       |
|-----------------|----------------------------|
| `/`             | Home                       |
| `/shop`         | Products list (filters, sort, pagination) |
| `/shop/:id`     | Product detail (size, qty, wishlist, add to bag) |
| `/about`        | About Us                   |
| `/services`     | Our Services               |
| `/blog`         | Blog collection (search, category, sort, load more) |
| `/blog/:slug`   | Blog post (prev / next)    |

## Structure

```
src/
  components/   Header, Footer, Layout, Carousel, Icons, ui (cards, stars, breadcrumbs)
  context/      ShopContext — bag & wishlist counters
  data/         products.js, blogs.js
  pages/        one file per page
  index.css     all styles (design tokens at the top)
public/img/     images
```

When deploying to static hosting, configure an SPA fallback to `index.html`
(e.g. `vercel.json` rewrites or Netlify `_redirects: /* /index.html 200`).
