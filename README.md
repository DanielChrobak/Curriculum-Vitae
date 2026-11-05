# Daniel Chrobak · Curriculum Vitae

A professional portfolio covering selected software projects, independent experience, technical capabilities, education, and credentials.

**Website:** https://danielchrobak.github.io/Curriculum-Vitae/

## Development

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, including `/Curriculum-Vitae/`.

```sh
npm run build
npm run preview
```

The build checks TypeScript and verifies generated content, credential preservation, internal links, metadata, and asset references. Output is in `dist/`. `SITE_BASE` can override the default `/Curriculum-Vitae/` path for another static host; update canonical, social, robots and sitemap URLs when changing the production address.

## Architecture and editing

- `index.html`: semantic, readable CV content. No framework runtime or client-side content fetch is required.
- `src/styles.css`: layered CSS, shared dark/light tokens, responsive navigation, reduced-motion behavior, and a dedicated print layout.
- `src/main.ts`: optional navigation, project filters, theme preference, disclosure links, and printing.
- `src/credentials.json`: issuer records retained from the original CV; rendered into HTML by the Vite plugin.
- `src/github.json`: public repository snapshot, including its check date.
- `scripts/refresh-github.mjs`: fetches only the three allowlisted public repositories, rejects private results, and writes a snapshot only after every request succeeds. Run `npm run refresh:github` to refresh locally. An optional `GH_TOKEN` environment variable supports authenticated API requests; no credentials are bundled in the site.

The dark teal identity and sidebar are retained from the original site. Project claims were updated against current READMEs on November 5, 2026. SlipStream has a high-level case study without a private-source link or unsupported latency guarantees. Education, experience dates, contact details, and the 13 credential records remain based on the original CV. The site does not claim current certification validity beyond the recorded earned dates.

## Deployment

GitHub Pages uses **GitHub Actions**, not the legacy branch-root Jekyll build. The workflow checks pull requests, builds and deploys `main`, and refreshes public repository statistics weekly. Scheduled refreshes change the deployed snapshot without committing generated data back to the repository. GitHub may disable scheduled workflows in inactive public repositories after 60 days; manual dispatch and pushes still work.

The production base path, canonical URL, sitemap and repository links use `Curriculum-Vitae`. There is no custom domain or external font/icon CDN dependency. GitHub Pages hosts the built static output, so no application server or secrets are needed by visitors.

## Browser checks

Check desktop, tablet, narrow phone and landscape widths; both themes; reduced motion; keyboard navigation and Escape dismissal; all project filters; direct links to filtered projects; native disclosures; and print preview. Printing includes all project summaries regardless of the active filter and expands credential records, then restores their prior state. Core content and credential disclosures remain available with JavaScript disabled.
