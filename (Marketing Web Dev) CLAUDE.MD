# Marketing Website Development Guide

## Project Context
<!-- Fill in before starting any project -->
- **Project**: [name and one-sentence description]
- **Brand**: [describe the tone — e.g. professional, playful, luxury, minimal]
- **Audience**: [who this is for and what they care about]
- **Goal**: [what should a visitor do — book a call, sign up, buy something, contact you]

---

## Stack
This is fixed — don't suggest alternatives unless asked.

- **Framework**: Next.js + TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel via GitHub
- **Contact Forms**: Resend (for email delivery) or Formspree (simpler, no code needed)
- **No database. No auth. No backend server.**

If a requested feature seems to require a database or auth, stop and ask before proceeding.

---

## Project Structure

```
src/
  app/           # Next.js pages and routes
  components/
    sections/    # Page sections (Hero, Features, Pricing, FAQ, Footer, etc.)
    ui/          # Small reusable pieces (Button, Card, Badge, etc.)
  lib/           # Any utility functions
  public/        # Images, fonts, static assets
```

Keep it flat and simple. Don't create folders for things that only have one file.

---

## Page & Content Rules

- Every page has one clear primary call-to-action — don't dilute it with five competing buttons
- Headlines do the selling — body copy supports, it doesn't repeat
- Every section has a job; if you can't explain what a section is trying to make the visitor do or feel, cut it
- No Lorem Ipsum ever — write real placeholder copy that fits the brand tone
- Images and icons should be intentional; don't add them as decoration for decoration's sake

---

## Design Standards

**This is the highest priority — marketing sites live or die on design quality.**

- Commit to a clear visual identity before writing any code; define the color palette, type pairing, and overall aesthetic first
- Typography: choose a distinctive font pairing — one display font for headlines, one clean font for body. Never default to Inter, Roboto, or Arial
- Color: pick a dominant color and one sharp accent. Avoid: purple gradients on white, generic SaaS blue, flat gray everything
- Spacing: generous whitespace makes things feel premium; crowded layouts feel cheap
- Motion: use subtle animations on scroll and hover to add life — but animate meaningfully, not everything
- Mobile: design mobile as a first-class experience, not a shrunk desktop layout

**Specific things to avoid:**
- Hero section with centered text, a subtitle, and two buttons on a white background — this is the default and it's forgettable
- Identical-height feature cards in a 3-column grid
- Stock photo backgrounds with a dark overlay and white text
- Navbar with logo left, links center, button right — push yourself to do something more interesting

---

## Code Conventions

- One component per file, named to match what it does (`HeroSection.tsx`, not `Section1.tsx`)
- No inline styles — Tailwind classes only
- No `any` TypeScript types
- Images use Next.js `<Image>` component — never a raw `<img>` tag
- Links use Next.js `<Link>` component — never a raw `<a>` tag for internal navigation
- Keep components focused — if a component is doing too many things, split it

---

## What Not To Do

- **Don't add dependencies without asking** — check if Tailwind or Next.js already handles it
- **Don't over-engineer** — this is a marketing site, not a web app; simplicity wins
- **Don't use a database or auth** — if a feature needs these, stop and ask first
- **Don't write generic copy** — every word should reflect the actual brand and audience
- **Don't leave console errors or warnings** — clean these up before considering a task done
- **Don't skip mobile** — check every section at 375px width before finishing

---

## Contact Forms

If a contact form is needed:
- **Simplest option**: Formspree — no code required, just an HTML form with their endpoint
- **More control**: Resend — requires a Next.js API route and a Resend account (free tier is generous)

Ask which the user prefers before building.

---

## Definition of Done

A task is complete when:
- [ ] Looks good and matches the brand direction
- [ ] Works correctly on mobile (375px) and desktop (1280px)
- [ ] All links go somewhere — no dead links or placeholder `#` hrefs
- [ ] No TypeScript errors (`tsc --noEmit` passes)
- [ ] No console errors or warnings
- [ ] Page loads fast — no unnecessarily large images or unused dependencies
- [ ] Copy is real and intentional, not placeholder text