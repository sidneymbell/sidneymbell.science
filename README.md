# sidneymbell.science

Plain HTML and CSS. No build step, no dependencies.

- `index.html`: all page content
- `style.css`: all styles
- `images/`: project, paper, and logo images

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.

## Publish with GitHub Pages

1. Commit these files to the root of the `main` branch.
2. In the repository, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Keep the custom domain set to `sidneymbell.science`. The `CNAME` file holds it.

`.nojekyll` tells GitHub Pages to serve the files as-is.
