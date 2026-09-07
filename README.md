# Frame Studio Interiors — Simple Showcase Version

This is the **trimmed-down alternative** to the full multi-service
version of this project — built for a startup-stage launch where you
need a professional site live fast, without the admin/CRM machinery
the full version includes.

## What's different from the full version

| | Full version | This version |
|---|---|---|
| Backend services | 5 (gateway, auth, project, lead, content) | 1 (contact-service) |
| Database | PostgreSQL, 4 databases | H2, one file on disk |
| Admin panel / login | Yes | **Removed** |
| Lead status tracking | Yes (New → Contacted → Won...) | **Removed** — one flat table |
| Contact form | Saves to lead-service, JWT-protected admin views it | Saves to one table + optional email |
| Public pages | Same | **Identical** — Home, About, Services, Projects, Before/After, Design Ideas, Process, Testimonials, Contact |

Nothing about the **public-facing site** changed — every page a visitor
sees is exactly what you already demoed. What's gone is everything
behind the scenes for managing enquiries as a team at scale.

## How enquiries work now

There's no admin panel to check. Instead:

1. Every submission is saved permanently to a file-based database
   (`backend/contact-service/data/contact.mv.db`) — nothing is ever lost.
2. If you configure SMTP (see `.env.example`), you get an **email**
   the moment someone submits the form.
3. Without SMTP configured, the app still works perfectly — you'd
   just need to ask a developer to open the database file to see
   submissions. Fine for very early stage; set up email as soon as
   enquiries start coming in.

## Run it locally

```bash
cp .env.example .env
# optionally fill in real SMTP credentials

docker compose up --build
```

- Backend: `http://localhost:8090` (health check: `/actuator/health`)
- Then, separately:
  ```bash
  cd frontend
  npm install
  npm start
  # -> http://localhost:4200
  ```

## Setting up email notifications (Gmail example)

1. Enable 2-Step Verification on the Gmail account you'll send from
2. Generate an **App Password**: Google Account → Security → App Passwords
3. In `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USERNAME=youraccount@gmail.com
   SMTP_PASSWORD=<the 16-character app password>
   MAIL_FROM=youraccount@gmail.com
   NOTIFY_EMAIL=youraccount@gmail.com
   ```
4. Restart: `docker compose up --build contact-service`

## Deployment (production)

- **Frontend**: Netlify or Vercel (static hosting) — `frontend/netlify.toml`
  is already configured with the SPA redirect. Update
  `src/environments/environment.prod.ts` with the real backend URL
  before building.
- **Backend**: any small Docker-capable host (a $5–10/month VM is
  enough at this scale — this single service is far lighter than the
  full 5-service version).

## Upgrading to the full version later

Nothing here needs to be thrown away. When you're ready for lead
tracking, an admin panel, and multi-service architecture, the full
version (`frame-studio-interiors/`) already has all of that built —
the public-facing pages are identical between both versions, so the
upgrade is a backend/infrastructure change, not a redesign.
