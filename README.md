# NextStone (concept)

**Live demo:** https://benyoumen.github.io/nextstone-concept/ (open *Entrar*, then pick a demo role)

A product concept for a marketplace that connects Brazilian real estate developers (*incorporadoras*) with investment funds. I designed the four-sided flow and built this MVP with AI-assisted tooling in 2025 to test whether the idea holds together end to end: onboarding, project submission, fund review, due diligence and deal tracking.

> **Concept project, not a company.** The fund logos on the landing page are placeholders chosen for the concept and do not represent real partnerships. People, companies, numbers and emails in the app are fictional. The demo runs without a backend.

## Problem

Small and mid-size developers struggle to reach institutional capital. Funds receive deals with no consistent way to compare a developer's track record or a project's risk. Both sides lose time on introductions that go nowhere.

## Decision: what I built, and what I cut

Four roles, each with its own dashboard:

| Role | What they do |
|---|---|
| Developer (*incorporadora*) | Submit projects, track negotiations, manage balance sheet and payments |
| Fund (*investidor*) | Review developers and projects, due diligence, portfolio, risk assessment |
| Originator (*originador*) | Bring in projects, chat with an assistant that hands off to a human manager, manage the team |
| Admin | Manage funds, review documents, track deals, assign analysts |

Cut from the first version: real payments, document storage and the scoring model. Scoring and matchmaking are shown as screens, not computed.

## Proof

- Click-through of all four roles in demo mode (login page, *Demonstração* buttons)
- Authentication and a `profiles` table with row-level security, ready to connect to a Supabase project of your own

No traction numbers: this is a concept, not a company.

## What I would do next

1. Define the scoring from real fund criteria before building any UI for it
2. Interview five developers and five funds on what they need to see in the first introduction
3. Replace the mocked data with a small seeded dataset and test the matchmaking on it

## Run it

```sh
npm install
npm run dev          # demo mode, no backend needed
```

To connect a backend, copy `.env.example` to `.env`, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, and apply `supabase/migrations`.

Stack: Vite, React, TypeScript, Tailwind, shadcn/ui, Supabase (optional). Interface in Brazilian Portuguese.

## Author

Benjamin Tayar, product leader working on AI products.
