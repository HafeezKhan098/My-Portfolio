# Hafeez Ullah — Portfolio

A conversion-focused personal portfolio built with Next.js, TypeScript, Tailwind CSS and Lucide icons.

## Positioning

The site is designed to work for multiple audiences without becoming a generic CV page:
- recruiters / internship reviewers
- freelance website clients
- founders looking for an AI/product builder
- collaborators and scholarship / university reviewers

## Structure

1. Hero — clear positioning and immediate CTAs
2. Selected work — proof-first project presentation
3. About — concise story without a long biography
4. Services — practical ways Hafeez can help
5. Toolkit — grouped technologies rather than percentage bars
6. Contact — direct email and GitHub

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Content

Most personal content is centralized in `lib/data.ts`. Update your links, email, projects and skills there.

If you want a CV button, add `public/cv.pdf` and add the link to the hero/navigation data.
