# Jospaka Ventures Nigeria Limited (JVNL)

A modern marketing site for **Jospaka Ventures Nigeria Limited**, a multi-disciplinary engineering, construction, and technical services company serving Nigeria’s oil and gas sector. The site showcases core capabilities, featured projects, certifications, testimonials, and a consultation workflow so prospective clients can quickly understand JVNL’s value and start a conversation.

---

## Features
- **Hero & Storytelling** – Animations, ISO certification callouts, and key stats (20+ years, 45+ projects, 100% safety record) establish credibility immediately.
- **Rich Service Catalog** – Eight service pillars (civil, electrical, mechanical, instrumentation, LPG, bioremediation, technical consulting, water treatment) rendered with responsive cards and hover interactions.
- **Project Portfolio** – Gallery-driven cards with a lightbox experience for flagship projects delivered for TotalEnergies and other partners.
- **Trust Signals** – Dedicated sections for certifications, safety leadership, testimonials, FAQs, and local content commitment.
- **Contact & Consultation Flow** – Multi-office contact details plus an EmailJS-powered dialog that routes consultation requests to `jospakavnl@gmail.com`.
- **Accessible, Mobile-Ready UI** – Built with Radix primitives, shadcn-inspired components, Tailwind CSS, and theme-aware animations that keep performance high on all devices.

---

## Tech Stack
- [Next.js 16](https://nextjs.org/) with the App Router (`app/`) and TypeScript
- React 19 with modern hooks and suspense-ready patterns
- Tailwind CSS v4 + `tailwindcss-animate` for utility-first styling
- Radix UI primitives + custom `components/ui/*` design system
- EmailJS for client-side consultation requests
- Vercel Analytics (optional) for production insight

---

## Project Structure
| Path | Purpose |
| --- | --- |
| `app/` | App Router entrypoint, global layout, metadata helpers |
| `app/api/contact/` | (Placeholder) server route slot for future API integration |
| `components/` | Page sections (hero, services, projects, safety, FAQ, contact, etc.) |
| `components/ui/` | Reusable headless UI primitives and wrappers |
| `hooks/` | Custom hooks such as `use-toast` |
| `public/images/` | Project, certificate, gallery, and logo assets |
| `styles/` | Additional global styles (legacy entry point) |

---

## Getting Started
### Prerequisites
- Node.js ≥ 18
- pnpm (preferred). You can swap for npm/yarn if needed.

### Installation
```bash
git clone https://github.com/<your-org>/Jospaka.git
cd Jospaka
pnpm install
```

### Local Development
```bash
pnpm dev
```
Navigate to `http://localhost:3000` to preview the site.

### Production Build
```bash
pnpm build
pnpm start   # Serves the optimized build
```

### Linting
```bash
pnpm lint
```

---

## Environment Variables
The consultation dialog uses EmailJS. Create a `.env.local` and set:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

You can fetch these values from the EmailJS dashboard. In production, store them as project secrets (e.g., Vercel Environment Variables).

---

## Customizing Content
- **Services** – Update the `services` array in `components/services.tsx`.
- **Projects** – Edit `featuredProjects` in `components/projects.tsx` and place corresponding imagery in `public/images/projects`.
- **Testimonials, FAQ, Safety, Vision** – Modify the respective components to reflect new copy, clients, or metrics.
- **Branding** – Swap assets under `public/images/logos` and adjust palette tokens in `app/globals.css`.

---

## Deployment
The codebase is optimized for [Vercel](https://vercel.com/) (zero-config for Next.js). After pushing to GitHub:
1. Import the repo in Vercel.
2. Add the EmailJS environment variables.
3. Trigger a production deployment—Vercel will handle the build and CDN distribution automatically.

---

## Contact
For project inquiries or contribution discussions:
- 📧 `jospakavnl@gmail.com`

---

Made with care for the JVNL team. Let us know via an issue or PR if you extend the site—we’d love to highlight additional case studies or integrations.

