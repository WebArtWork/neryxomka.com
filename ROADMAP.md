# Neryxomka Roadmap

Status: APPROVED. Scope: static investor-facing demo only. Nothing beyond
this is planned yet.

Current repo state: fresh `ngx-prime-default` Angular template. Auth /
dashboard / profile / settings pages from the template are used as-is —
no changes there.

Goal: make the product vision navigable and demoable for investors. No
backend, no persistence beyond local/static state — but content must be
real and realistic, not dummy/lorem-ipsum. All static content lives as JSON
files under `src/data/` (following the existing `src/data/company` pattern),
one dataset per entity type, loaded by services/components — not hardcoded
in components.

## Decide: which of these go in the demo?

### Entities (static JSON data, realistic content)

- [ ] `property` — a few properties across different types (apartment,
      house, land, etc.)
- [ ] `listing` — sale + rental listings tied to those properties
- [ ] `record` — property history entries (renovation, repair, utility) —
      this is the "digital passport" differentiator
- [ ] `complex` — a few developments
- [ ] `developer` — a few developer profiles
- [ ] `agency` — a few agencies
- [ ] `agent` — a few agents, linked to agencies
- [ ] `request` — a few buyer/tenant requests
- [ ] `user` — public profile view
- [ ] `comment` — comments/reviews on a few entities

### Components per entity (`*-view`, `*-short`, `*-icon`, `*-form`)

- [ ] property: view, short, icon, form
- [ ] listing: view, short, icon, form
- [ ] record: view, short, form (no icon per README)
- [ ] complex: view, short, icon, form
- [ ] developer: view, short, icon, form
- [ ] agency: view, short, icon, form
- [ ] agent: view, short, icon, form
- [ ] request: view, short, icon, form
- [ ] user: view, short, icon, form
- [ ] comment: comments-view, comment-short, comment-form

### Pages

- [ ] Feed — scrollable feed, swipe left/right (favourite/ignore)
      against local static state
- [ ] Explore — search/filter UI against the static dataset
- [ ] Map — pins for entities, static coordinates in fixtures
- [ ] Editor — forms render and validate, no persistence
- [ ] property — dedicated detail page (replaces generic Entity page)
- [ ] listing — dedicated detail page
- [ ] records — dedicated detail page
- [ ] complex — dedicated detail page
- [ ] developer — dedicated detail page
- [ ] agency — dedicated detail page
- [ ] agent — dedicated detail page
- [ ] client — dedicated detail page (replaces generic user-facing Entity view)

Removed: Sign, Workspace (already covered by existing template pages),
Investment (not needed yet). Workspace's role is replaced by Explore.
Entity (generic) is replaced by one dedicated page per entity type.

Note: `request` and `comment` entities have no dedicated page — they only
appear embedded inside other pages/entities (e.g. comments on an entity
page, requests inside Feed/Explore). `user`'s dedicated page is named
`client` to avoid confusion with the auth/account user.

### Explicitly out of scope for this demo

- Real backend/database/API
- Real CRUD / persistence
- Business-profile claiming
- Enforced visibility/permission logic (can show badges without enforcing)
- Verification, moderation, monetization
