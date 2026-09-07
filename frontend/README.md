# Frame Studio Interiors — Frontend

Angular 18 (standalone components, strict TypeScript), Bootstrap 5,
Angular Material, SCSS, RxJS.

## Phase 1 status

This is the **foundation** scaffold: routing, build config, shared
shell (header/footer/WhatsApp button), and one placeholder component
per public page so every route in spec section 63 resolves. The
premium visual design (Phase 2) and real data wiring to the backend
(Phase 3/4) come next.

## Prerequisites

- Node.js 20.x
- npm 10.x

## Install

```bash
cd frontend
npm install
```

## Run locally

```bash
npm start
# -> http://localhost:4200
```

The app expects the API Gateway at `http://localhost:8080/api` in
development (see `src/environments/environment.ts`). Start the backend
stack first (`docker compose up` from the repo root) or point
`apiBaseUrl` at wherever your gateway is running.

## Build

```bash
npm run build:prod
# output: dist/frame-studio-interiors/browser
```

## Test

```bash
npm test
```

Only the default Angular CLI test harness is configured in Phase 1;
component/service/guard/interceptor specs are added alongside their
implementations in later phases (spec section 56).

## Deploy to Netlify

`netlify.toml` at the frontend root already configures:

- Build command: `npm run build:prod`
- Publish directory: `dist/frame-studio-interiors/browser`
- SPA redirect (`/* -> /index.html`, status 200) so refreshing any
  route (e.g. `/projects/modern-3bhk-whitefield`) never 404s.

Steps:

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**.
3. Point the **Base directory** at `frontend` (already set in
   `netlify.toml`, but double-check in the Netlify UI too).
4. Set environment variables if you externalize `apiBaseUrl` later.
5. Deploy. Netlify will rebuild the SPA correctly on every push.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `ng: command not found` | Angular CLI not installed globally | Use `npx ng ...` or run via the `npm` scripts above (they call the local CLI) |
| Blank page after `ng build` locally opened via `file://` | SPA routing needs a real server | Serve via `npx http-server dist/frame-studio-interiors/browser` or deploy to Netlify |
| 404 on route refresh in production | Missing SPA redirect on your host | Confirm `netlify.toml` redirect rule deployed, or replicate the equivalent rule on your host |
| CORS errors calling the API | Gateway's allowed origin doesn't match your frontend URL | Set `FRONTEND_URL` in the gateway's environment to match exactly (including protocol/port) |
| Bootstrap styles missing | `node_modules` not installed or `angular.json` styles array edited | Re-run `npm install`; confirm `angular.json` still lists the Bootstrap CSS path |
