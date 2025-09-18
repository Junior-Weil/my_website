# GitHub Pages SPA Fix

This repo uses React Router on GitHub Pages. Two changes avoid 404s on refresh:
1. `vite.config.js` sets `base: '/my_website/'` to match the repository name.
2. A `404.html` is added that rewrites unknown paths back to `/my_website/index.html`,
   and `index.html` contains a script to restore the correct SPA route using the
   query parameter.

Deploy with:
```bash
npm run build
npm run deploy
```
