# Carmen portfolio

Carmen's visual art portfolio and creative projects, built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

The app includes four views: Home, Work, Projects, and About. Artwork content is managed in `src/data/artworks.js`; local image files can be added to `public/artworks/` and referenced from there when Carmen's final photography is ready.

## Publish on GitHub Pages

The repository is configured for `https://lisakiwi2020.github.io/carmen-portfolio/`.

1. Push the project to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will build and publish the site automatically.

## Structure

```text
public/artworks/      Local artwork files
src/components/       Shared UI components
src/pages/            Portfolio views
src/data/artworks.js  Artwork catalogue
src/App.jsx           Navigation and app shell
src/main.jsx          React entry point
```
