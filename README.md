# alexis-portfolio

Source for **[nayko.dev](https://nayko.dev)** — the personal site and online CV of
Alexis Sanchis, a software engineer based in France.

A single bilingual page (English / French) covering experience, skills and
contact details, built to be read quickly rather than browsed.

## Stack

- **Next.js 15** (App Router) and **React 19** — server components by default
- **TypeScript**
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.js`
- **next-themes** for light and dark
- Locale negotiation in `middleware.ts`, both locales prerendered

## Running locally

```bash
pnpm install
pnpm dev        # http://localhost:3001
```

```bash
pnpm build && pnpm start   # production build
npx tsc --noEmit           # typecheck
```

`next.config.mjs` sets `ignoreBuildErrors` and `ignoreDuringBuilds`, so a green
build does not imply a clean typecheck — run `tsc` separately.

## Internationalisation

Every route lives under `app/[lang]/`. All user-facing copy is in
`dictionaries/en.json` and `dictionaries/fr.json`, which must stay structurally
identical: the `Dictionary` type is inferred from the English file alone, so a
missing French key will not be caught by the compiler.

Components receive the resolved dictionary as a `dict` prop. Internal links must
carry the locale (`` href={`/${lang}`} ``) to avoid a middleware redirect.

## Structure

```
app/[lang]/page.tsx    the single page: hero, experience, skills, contact
app/[lang]/layout.tsx  shell, theme provider, metadata
app/globals.css        Tailwind entry point and theme tokens
components/sections/   one component per page section
components/ui/         shadcn/ui primitives
dictionaries/          all copy, one file per locale
lib/definitions.tsx    contact links and experience logos
middleware.ts          locale negotiation
```

## Author

[Alexis Sanchis](https://nayko.dev) — [LinkedIn](https://www.linkedin.com/in/alexis-sanchis-617301129/)
