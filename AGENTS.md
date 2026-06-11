# AGENTS.md — driver-trips-analysis

## Quick start

- `npm run build` — compile TypeScript to `dist/`
- `npm start` — runs `bin/www` (requires compiled `dist/`)
- `npm run client:start` — React dev server (proxies to localhost:3005)
- `npm test` — jest (no tests exist yet)
- Prettier enforced via pre-commit hook (Husky v9, `.husky/pre-commit`)
- No lint command configured

## Package manager

- **Root + client**: npm (no lockfile — `.npmrc` sets `package-lock=false`)
- Install everything: `npm install` (installs root), `cd client && npm install`

## Architecture

- **Server**: Express 4 + TypeScript 5, entrypoint `bin/www` (loads `dist/app.js`)
- **Client**: React 18 SPA (react-scripts 5), React Router 6, ApexCharts
- **Database**: JSON files in `data/` loaded synchronously via `require()`
- **API prefix**: all routes under `/api`
- **Port**: server on 3005, client proxies to localhost:3005

## Dead deps removed

- `graphql`, `express-graphql`, `pm2`, `date-fns` — unused or removed
- `apollo-client`, `react-apollo`, `@sentry/browser`, `@reach/router`, `add`, `yarn` — unused

## Build & deploy

- Production build: `npm run heroku-postbuild` (root build + client build)
- Express serves `client/build` in production with catch-all for SPA routing
- `.env` required for local dev (gitignored)
- `NODE_ENV` affects morgan log format

## Known missing directories (do not assume they exist)

- `typings/` — referenced in tsconfig include but doesn't exist (safe to ignore)
- `public/` — fallback static mount, not used (client/build served for prod)

## API routes (`/api`)

- `GET /` — health check
- `GET /trips`, `GET /trip/:id` — trip data (50 trips)
- `GET /drivers`, `GET /driver/:id` — driver data (10 drivers)
- `GET /vehicle/:id` — vehicle data
- `GET /stats` — hardcoded stats

## Testing

- Jest installed but no test files exist
- No jest configuration file found
