# CI Performance Lab

## Project Overview

This repository is a demo Next.js application used to benchmark GitHub Actions CI performance.

It is intentionally simple as a product, but includes enough TypeScript, linting, unit tests, and a production build to create a realistic CI workload. The same workflow can be compared across runners by changing only the `runs-on` value.

The dashboard UI shows static demo timings so the app stays stable. Real performance comparisons should come from GitHub Actions step durations.

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Run Checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

Optional:

```bash
npm start
```

## App Routes

- `/` — CI Performance Lab dashboard
- `/about` — short explanations of CI, GitHub Actions, runners, installs, builds, and caching

## GitHub Actions

The workflow lives at `.github/workflows/ci.yml`.

It runs on:

- pushes to `main`
- pull requests

The job uses:

```yaml
runs-on: ubuntu-latest
```

Each CI stage is a separate step so GitHub Actions shows individual timings:

1. Checkout
2. Setup Node.js
3. Install dependencies
4. Type check
5. Lint
6. Tests
7. Build

`actions/setup-node` is configured with `cache: npm` for GitHub's standard npm caching.

To benchmark a different runner later, change only the `runs-on` line while keeping every other step identical. Compare measured step times from the Actions UI. Do not assume one runner is faster until you record real results.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- Vitest + Testing Library
- Lucide React
- npm
