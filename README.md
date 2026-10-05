# Fermor Finance Landing Page

A responsive React and Vite recreation of the supplied Fermor finance landing-page reference. The interface uses reusable React sections and CSS-built dashboard components; the financial trend graphs are SVG paths rendered as chart elements, not image assets.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local URL after startup. Create a production build with `npm run build` and preview it with `npm run preview`.

## Implementation

- `src/App.jsx` contains the reusable page sections, cards, chart elements, and small interactions.
- `src/styles.css` contains the layout, visual styling, and responsive breakpoints.
- `src/main.jsx` mounts the React application.
- `index.html` provides the app shell and document metadata.

DM Sans is loaded from Google Fonts as the closest practical match to the clean geometric sans-serif in the reference. Lucide React supplies the small interface icons.
