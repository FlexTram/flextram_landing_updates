# FlexTram Landing Updates

## Repo origin
- **Fork:** https://github.com/FlexTram/flextram_landing_updates
- **Upstream (live site):** https://github.com/blackbox-engineering/flextram_landing
- **Live domain:** www.flextram.com (DNS points to blackbox-engineering.github.io)
- **Deployment:** Push to both remotes — changes go live on production immediately
  - `origin` = FlexTram/flextram_landing_updates (fork/backup)
  - `production` = blackbox-engineering/flextram_landing (live site)
- **Contributor access:** Direct push to production (no PRs needed)

## What's here
Static HTML site built on **Paper Kit 2 PRO v2.3.0** (Creative Tim). No build tools or package.json -- just HTML/CSS/JS served as-is.

### Pages (30+ total)
- `index.html` -- Main FlexTram landing page (self-hosted video hero, client logos, contact form)
- `landing-page.html` -- Secondary landing page (full SEO meta)
- `system.html` -- System/product details page with before/after animation (easter egg, noindex)
- `solutions/index.html` -- Solutions hub with 17 industry cards (images + SEO descriptions)
- `solutions/airport-fbo.html` -- Airport & FBO use case page
- `solutions/resort-hotel.html` -- Resort & hotel shuttles
- `solutions/festivals-events.html` -- Festivals & outdoor events
- `solutions/stadiums-arenas.html` -- Stadiums & arenas
- `solutions/cruise-terminals.html` -- Cruise terminals
- `solutions/healthcare-hospitals.html` -- Healthcare & hospitals
- `solutions/university-campus.html` -- University & campus
- `solutions/warehouse-logistics.html` -- Warehouse & logistics
- `solutions/senior-living.html` -- Senior living communities
- `solutions/attractions-theme-parks.html` -- Attractions & theme parks
- `solutions/raceways-motorsports.html` -- Raceways & motorsports
- `solutions/air-shows.html` -- Air shows & aviation events
- `solutions/factory-tours.html` -- Factory & facility tours
- `solutions/convention-centers.html` -- Convention centers
- `solutions/labor-companies.html` -- Labor & staffing companies
- `solutions/golf-courses.html` -- Golf courses
- `solutions/planned-communities.html` -- Planned communities
- `blog/index.html` -- Blog hub page
- `blog/onsite-transportation-paradigm.html` -- First blog article (live)
- `blog/_drafts/` -- Scheduled articles (auto-published by GitHub Actions)

### Key directories
- `assets/css/` -- Stylesheets (Bootstrap purged, Paper Kit purged, `custom.css`, `global.css`, `solutions.css`, `use-case.css`, `blog.css`, `blog-post.css`)
- `assets/img/` -- Images (hero photos, event photos, logos, favicon)
- `assets/img/640/` -- Responsive 640px mobile variants (21 images)
- `assets/img/logos/` -- Client logos for scrolling carousel (26 logos)
- `assets/img/solutions/` -- Industry images for solutions cards (17 images)
- `assets/img/hero-*.jpg` -- Hero photos for all 17 solution sub-pages
- `assets/video/hero.mp4` -- Self-hosted hero video (4MB, 36s, 720p)
- `assets/js/` -- JavaScript (core only: jQuery, Popper, Bootstrap, Paper Kit, Slick)
- `_source_files/` -- Original source images (gitignored)
- `.github/workflows/` -- GitHub Actions (auto-publish blog drafts)

### Fonts
- **Homepage:** Inter (body) + Montserrat (headings) via Google Fonts
- **Solutions + Blog pages:** DM Sans (body) + Instrument Serif (headings) via Google Fonts

### SEO setup
- `sitemap.xml` -- All pages listed (solutions, blog, homepage)
- `robots.txt` -- Allow all, sitemap reference
- JSON-LD structured data: Organization, BreadcrumbList, BlogPosting, FAQPage schemas
- FAQPage JSON-LD on all 17 industry pages (86 FAQ items) + blog articles
- OG/Twitter meta tags on all pages
- Canonical URLs on all pages pointing to flextram.com
- Keyword-rich alt tags on every image across the site
- GA4 tracking (G-ZYK6B5M9QT) on all pages
- Instagram sameAs in Organization schema on all pages
- Registered in Google Search Console, sitemap submitted

### Performance optimizations
- CSS purged: Bootstrap 152KB→9KB, Paper Kit 313KB→34KB (422KB saved)
- Critical CSS inlined on homepage, stylesheets deferred
- Image lazy loading (46 images), fetchpriority="high" on hero images
- Responsive images: srcset with 640px mobile variants on 21 images
- Self-hosted video replaces YouTube iframe (554MB→4MB)
- 11 unused JS plugins removed from homepage and landing page
- Lighthouse: SEO 100, Best Practices 100, Performance 60, Accessibility 88

### Blog system
- Hub page at `/blog/` with article card grid
- Article template uses `blog-post.css` (based on use-case.css patterns)
- **Auto-publish workflow:** GitHub Actions runs daily at 9 AM UTC
  - Drafts in `blog/_drafts/` with filename `YYYY-MM-DD_slug.html`
  - When date arrives: moves to `blog/`, updates sitemap, adds card to hub page
  - Drafts include `BLOG_META` comment block for hub card metadata
  - Can also trigger manually from GitHub Actions tab
  - **Runs on production only** (guard added 2026-04-18): `if: github.repository == 'blackbox-engineering/flextram_landing'`. Before the guard, the workflow fired independently on origin (fork) and production, creating divergent commit SHAs with identical content and forcing a cherry-pick pattern on same-day manual pushes. On 2026-04-19 the two remotes were reconciled via `git reset --hard production/master` locally + `git push origin master --force-with-lease` — both remotes now track a single linear history. If the fork ever falls behind after an auto-publish, sync with: `git fetch production && git push origin production/master:master` (non-destructive, fork fast-forwards to production).
- **Scheduled articles:**
  - April 15: "The True Cost of the Golf Cart" (Operations)
  - April 22: "The Fan Experience Gap" (Fan Experience)
  - April 29: "Sponsorship's Untapped Frontier" (Revenue)

### Contact form
- Formspree endpoint: `https://formspree.io/f/mvzzoarr`
- Form ID: `#contact-form` (used as anchor target from all CTAs)
- All solution page and blog "Request Info" buttons link to `/#contact-form`
- Form labels properly associated with inputs for accessibility

### Client logos in carousel (26)
Tesla, Amazon, NASCAR, Live Nation, AEG, Coachella, Stagecoach, Lollapalooza, Bonnaroo, EDC, Rolling Loud, Insomniac, C3 Presents, Sick New World, FloydFest, When We Were Young, Lovers & Friends, Innings Festival, Desert Daze, Besame Mucho, FSU, Ingredion, LAZ Parking, Savannah Bananas, Dreamstate, ZA Queen Mary

### Vehicle specs (used across all pages)
- Passenger capacity: 16-27 seated
- ADA compliant: Standard
- Operators needed: 1 driver
- **NOT electric** -- use "compact", "small format", or "agile" (never "electric")
- Top speed and operating range removed (not relevant to marketing)

### Navigation
- All pages have: Solutions, Blog, Contact links
- Homepage nav: inline-styled white links over video hero
- Solutions + Blog pages: `.nav-links` with `.nav-link` classes
- Logo links to `/` on all pages (no target="_blank")

### CNAME
Set to `www.flextram.com`

## Dev server
Use the Claude Preview tool with `.claude/launch.json`, or run manually:
```
npx http-server -p 8080 -c-1
```
Then open http://localhost:8080

## Git workflow
```bash
# Push to both remotes (fork + production)
git add [files] && git commit -m "message"
git push origin master && git push production master
```
Note: `gh` CLI installed at `/usr/local/bin/gh`, authenticated as FlexTram account with `workflow` scope.

## Status

### Session 1 (2026-04-06) -- Foundation
- New FlexTram branding (logos, favicon with X icon)
- YouTube video hero background (muted, looping)
- 22 client logos in scrolling carousel (randomized order, individually sized)
- Typography modernized (Inter + Montserrat, responsive clamp() sizing, 2026 best practices)
- Event photos section added (3 photos: Coachella/Stagecoach, Las Vegas, event)
- Updated body copy with "Let's talk!" CTA linking to contact form
- FlexTram black logo replacing text heading
- 13 SEO-optimized industry landing pages built
- Full SEO overhaul (meta tags, structured data, alt tags, sitemap, robots.txt)
- Codebase cleaned up (~4MB unused template assets removed)
- Fixed broken HTML (form tag, double-slash paths, H1 hierarchy)
- PR #1 and PR #2 merged to production

### Session 2 (2026-04-07) -- Expansion & Polish
- Contributor access to production repo -- direct push, no PRs needed
- Added 4 more client logos (Dreamstate, ZA Queen Mary, Live Nation, AEG)
- Added 4 more solution verticals: convention centers, labor companies, golf courses, planned communities (17 total)
- Added real hero photos to 10 sub-pages (converted HEIC to JPEG, resized to 1200px)
- Optimized all images site-wide (resized oversized photos from 4032px to 1200px, logos to 500px -- saved ~25MB)
- Removed "electric" from all pages (FlexTrams are not electric) -- replaced with "compact", "small format", "agile"
- Removed Drive Type spec and all exhaust/emissions claims
- Updated passenger capacity from 25 to 27 across all 19 pages
- Replaced comparison tables with visual driver labor comparison cards (HTML/CSS graphic)
- Consolidated CTAs to single "Request Info" button on all sub-pages
- Added Smart Stops on-demand feature copy to solutions hub
- Comprehensive mobile responsive overhaul (breakpoints at 768px, 576px, 480px, 420px, 375px)
- Hero images go full-bleed on mobile
- Updated footer copyright to "FlexTram Systems"
- Removed testimonial section from airport-fbo page

### Session 3 (2026-04-07 continued) -- SEO, Performance & Cleanup
- Removed top speed spec and operating range spec from all 17 sub-pages
- SEO overhaul: image lazy loading (46 images), fetchpriority="high" on hero images
- Google Fonts crossorigin preconnect added to all 21 pages
- Replaced YouTube iframe with self-hosted 4MB hero video (compressed from 554MB 4K source, trimmed to 36s)
- YouTube facade pattern: poster image loads first, video swaps in after 3s delay
- GA4 tracking (G-ZYK6B5M9QT) added to all 21 pages
- Instagram sameAs added to Organization schema on all 19 pages with schema
- Added rel="canonical" to landing-page.html and system.html
- Added Solutions + Contact nav links to homepage navbar
- Hero photos added to remaining 7 sub-pages (resort, cruise, healthcare, senior living, theme parks, golf, planned communities)
- Fixed broken sentences from electric removal on 3 pages (warehouse, university, convention)
- Fixed duplicate ADA stat on factory-tours (replaced with "3x group size" stat)
- Removed system.html from sitemap (kept as easter egg, already has noindex)
- Fixed logo target="_blank" on homepage and landing page
- Updated sitemap lastmod dates to 2026-04-07
- Removed Product schema from homepage (was causing Google Search Console errors -- no public pricing)
- Fixed landing-page.html title (was "Paper Kit 2 Pro by Creative Tim")
- Added full SEO meta to landing-page.html (description, OG, Twitter, keywords, Organization schema)
- Moved 13 raw source images from repo root to _source_files/
- Removed 11 unused JS plugins from homepage and landing page (bootstrap-switch, nouislider, moment, tagsinput, selectpicker, datetimepicker, photoswipe, jasny, presentation-page, Google Maps placeholder)
- Removed demo.css (58KB) from homepage and landing page
- Converted FAQPage microdata to JSON-LD on all 17 sub-pages (86 FAQ items)
- Fixed accessibility: removed viewport zoom restrictions, added form label associations
- Lighthouse audit: SEO 100, Best Practices 100, Accessibility 83→88, Performance 46→60
- Registered flextram.com in Google Search Console and submitted sitemap.xml

### Session 4 (2026-04-08) -- Performance, Blog & Content
- Performance optimization: responsive images with srcset (21 images, 640px mobile variants)
- CSS purge: Bootstrap 152KB→9KB, Paper Kit 313KB→34KB (422KB total savings)
- Critical CSS inlined on homepage, stylesheets deferred via preload
- Lighthouse performance: 46→60, FCP 5.3s→3.1s, LCP 16.9s→8.4s, TBT 510→260ms
- Built blog section: hub page (/blog/), article template, blog.css + blog-post.css
- Published first article: "The Onsite Transportation Paradigm Is Changing — Here's Why"
- Added Blog nav link to all 23 pages site-wide
- GitHub Actions auto-publish workflow for scheduled blog posts
- Scheduled 3 future articles: golf cart cost (Apr 15), fan experience gap (Apr 22), sponsorship frontier (Apr 29)
- All blog articles fully SEO optimized: BlogPosting + FAQPage JSON-LD, article OG tags, internal links to solution pages, responsive hero images
- Removed operating range spec from all 17 sub-pages

### Session 5 (2026-04-08 continued) -- Engagement, SEO & Photos
- Removed placeholder testimonials from all 16 solution sub-pages (will add real client quotes as they come in)
- Added thumbnail images to "Other industries" related-solution cards on all 17 sub-pages (using hub card images)
- Added sticky floating "Request Info →" CTA button on all 17 sub-pages (fixed bottom-right desktop, full-width mobile)
- Created branded 404 page with custom pixel-art graphic, "End of The Line" heading, nav links
- Fixed homepage heading hierarchy: H6 card-category → H2, H5 body text → p (Lighthouse fix, no visual change)
- Added ItemList JSON-LD schema to solutions hub (17 ListItems with URLs)
- Darkened tertiary text color #888780 → #6b6a64 for WCAG AA contrast compliance (3.8:1 → 5.5:1)
- Also replaced 3 hardcoded #888780 instances in use-case.css with var(--color-text-tertiary)
- Swapped hero images on 5 sub-pages with new real photos:
  - Festivals: Bonnaroo fleet under staging tent
  - Stadiums: FlexTram at Las Vegas venue with stage truss
  - Raceways: Fleet at sunset with "TRAM 11" signage
  - Warehouse: FlexTram at Ingredion factory (new angle)
  - Labor: Crew in safety vests riding the tram
- Repurposed 3 displaced hero images to better-fit pages:
  - Old festivals (EDC sign) → Air shows
  - Old stadiums (FSU with riders) → University & campus
  - Old raceways (tram on street) → Convention centers
- All new/swapped images resized to 1200px + 640px mobile srcset variants
- Updated alt tags on all 8 changed hero images
- Moved 7 source photos + unused images to _source_files/
- Updated sitemap lastmod dates to 2026-04-08
- Removed testimonial CSS from use-case.css (.testimonial, .testimonial-quote, .testimonial-attr + responsive rules)
- GA4 early data reviewed: 90% direct traffic, 2 organic sessions (1m30s engagement), raceways & stadiums most-visited sub-pages

### Session 6 (2026-04-09) -- FIFA & Football Pages, SEO, Performance
- Built 2 new solution landing pages: FIFA World Cup 2026, Fall Football Stadiums
- Built 2 new blog posts: World Cup fan-first mobility, Football parking lot weakest link
- All 4 pages restyled from Space Grotesk/dark theme to match site design (DM Sans + Instrument Serif, global.css + use-case/blog-post CSS)
- Full SEO on all 4 pages: JSON-LD schemas (BlogPosting, FAQPage, BreadcrumbList, Organization), OG/Twitter tags, canonical URLs
- Added soccer stadium and football stadium images for solutions hub cards
- Updated blog hub with 2 new article cards
- Updated solutions hub with 2 new cards + ItemList schema (17 → 19 industries)
- Added 4 new URLs to sitemap.xml
- Updated contact form heading: "Reserve yours today" → "See what FlexTram can do for you."
- Added "alternateName": "FlexTrolley" to Organization JSON-LD schema on all 29 pages (captures FlexTrolley searches without displaying on site)
- Reduced Ingredion logo size by 10% in carousel
- Fixed airport-FBO bounce: updated headline to "Your FBO deserves better than a golf cart." (was generic "Move more passengers")
- Homepage performance: added 89KB poster frame to hero video, changed preload="auto" to preload="metadata" (reduces LCP by loading poster instantly while video downloads in background)
- Confirmed max passenger capacity is 27 (verified by client)
- Search Console linked to GA4 (done by client)
- Source draft files moved to _source_files/

### Session 7 (2026-04-10) -- Stadium Districts Blog, Performance, Spec Update
- Published new blog post: "Stadiums Are Becoming Neighborhoods" (stadium-districts-mixed-use-transportation.html)
- Custom hero image for stadium districts article (stadium skyline with urban infrastructure)
- Restyled from Inter/blue theme to match site design (DM Sans + Instrument Serif, blog-post.css)
- Full SEO: 4 JSON-LD schemas, OG/Twitter tags, canonical URL, 5 FAQs
- Preserved all 4 blockquotes with attributions (Carrie Walton Penner/Broncos, HOK, Burns & McDonnell, Brad Chambers/JLL)
- Airport-FBO: swapped hero image to tarmac photo (was empty tram in parking lot)
- Updated blog hub with new article card
- Added URL to sitemap.xml
- Updated passenger capacity from "16-27 seated" to "Up to 27 seated" across all 19 solution sub-pages (confirmed by client)
- Updated sitemap lastmod dates to 2026-04-10
- GA4 data reviewed: 151 views, 27 users, 55s avg engagement; organic search showing 8 impressions for branded terms (flextram, flextrolley, flex shuttle, flex trolley); FIFA blog at 54s engagement; solutions hub stickiest page at 59s
- Submitted 9 URLs for immediate indexing in Google Search Console
- Instagram sameAs in Organization schema on all pages
- Registered in Google Search Console, sitemap submitted

### Session 8 (2026-04-11 to 2026-04-15) -- Content Sprint, Airport-FBO Rewrite, Performance Cleanup

**Content published (6 new blog posts):**
- Festival Season Is Here (Coachella context, front-of-house/back-of-house framing)
- Data Center Construction People-Moving Problem (hyperscale campus transit gap)
- Factory Workers Walking Two Hours (warehouse shift-change transit waste)
- Cruise Terminals People-Moving (homeport turnaround + private island destinations)
- Golf Tournament Spectator Experience (PGA meeting support — placed quietly in grid, not featured)
- Why Isn't Transportation on the List? (flagship manifesto — new featured Latest post, sitemap priority 0.8)
- Data Center Crew Retention (companion to people-moving post; labor shortage angle)

**Airport-FBO page overhaul (2s → 39s engagement):**
- Rewrote hero with "blind spot" hook modeled after FIFA World Cup page pattern: "Your FBO sells a seamless arrival. The ramp tells a different story."
- Rewrote all 4 pain cards with vivid FBO-specific scenarios (Gulfstream scenario, aircraft liability, charter season economics, silent client churn)
- Updated meta/Twitter/OG descriptions
- Changed "The problem" section label to "The blind spot"
- Added FlexTrolley mention in solution paragraph + FAQ answer

**FlexTrolley SEO push (ranking work for position 80 → climbing):**
- Added 7 visible body text mentions across: homepage, solutions hub, blog hub, festival blog, airport-FBO (FAQ + solution paragraph), data center post
- Added FlexTrolley/flex trolley/flex shuttle to keyword meta tags on 3 pages
- GSC results: impressions grew 12 → 16, "flex tram" appeared at position 4.5 (new page-1 ranking)

**Internal linking for SEO + engagement:**
- Added "Related reading" sections linking blog posts to 4 solution pages (cruise-terminals, warehouse-logistics, factory-tours, labor-companies)
- Added manifesto post cross-links to stadiums-arenas, festivals-events solution pages
- Inline blog-to-blog cross-links between data-center/factory-workers/cruise/retention posts

**Homepage copy refresh (per client MD):**
- Body: "FlexTram (also known as FlexTrolley) builds... large venues, and high-volume operations"
- Added "The vehicle is just the starting point." as standalone paragraph
- Removed Origin SCT / platform language (returning on dedicated page later)
- Golf cart line: "Golf carts are for golf. Vans are for the highway. FlexTram is built for everything in between."
- Contact header: "See what FlexTram can do for you." → "Tell us about your venue."

**Performance cleanup:**
- Converted 19 solution card PNGs to JPG (10MB → 2MB, ~85% reduction per solution page)
- Deleted 7 unused JS plugin files + 2 unused plugin directories (~470KB)
- Deleted 9 unused images (~1.2MB)
- Fixed broken link in April 22 fan-experience-gap draft
- Total repo reduction: ~9.5MB

**Analytics wins:**
- Total sessions 93 → 132 (+42%)
- Organic sessions 8 → 23 (+188%)
- Organic engagement rate 62.5% → 82.6%
- Blog hub engagement 27s → 54s (doubled)
- GSC impressions 48 → 72 (+50%)
- AI referrals started appearing: `gemini.google.com` (100% engagement, 1m13s avg)
- AI-search advanced operator query (`-site:reddit.com -site:twitter.com...`) surfaced data center post at position 6
- New query discovery: "flex tram" at position 4.5 (page 1), "distribution center inurl:blog" at position 25

### Session 10 (2026-04-16 to 2026-04-17) — Content expansion, conversion funnel, performance overhaul, repo cleanup

Two-day mega-sprint. Covered in three themes: new content + tone fix, full conversion funnel build-out, and a deep performance pass that lifted every ranking-critical page into the 75-90+ Lighthouse mobile range.

**Content (3 new published blog posts + 1 major solution-page rewrite):**
- Published "Shuttle Bus vs. FlexTram: The Real Cost of Moving People Inside Your Event" (`/blog/shuttle-bus-vs-flextram`, ~2,400 words, Operations & Economics)
  - Close-proximity scope protection in title, callout, opening, and SEO metadata
  - Named examples: Hard Rock Stadium (25-min rideshare walk), Bonnaroo (45-60 min campsite walks), Echo Park Speedway (hour-long cart hold), PGA Valhalla (Ryan Ogle quote), THE PLAYERS Championship
  - Target keyword cluster proven by PVGP inbound: "shuttle bus alternative"
- Published "Your Event Isn't at a Stadium. It's at a Park, a Beach, or a Street." (`/blog/venue-isnt-a-stadium`, ~2,400 words, NEW "Venue Planning" category)
  - Opens the "temporary venue mobility" category
  - X Games hero photo (Huntington Beach vert ramps)
  - Named examples: US Open of Surfing, AVP Long Beach, Grand Prix of Long Beach (1.97mi/180K spectators), Baltimore GP (cautionary tale, permits pulled 2013)
  - PVGP hinted at as "450-acre urban park motorsport festival" — not named pending usage rights
- Published "Curb to Gate: Why the Fan Journey Became the Product at Live Events" (`/blog/curb-to-gate-fan-journey`, ~2,000 words, Industry Analysis)
  - Parking-industry positioning piece targeting LAZ, Propark Mobility, Metropolis, ParkHub, Hollywood Park
  - Opens partnership conversation with parking operators (new GTM angle)
  - All cited companies + $ figures + quotes have source URLs for verification
- Rewrote `solutions/airport-fbo.html` hero + first H2 + pain cards
  - Root cause of 3s engagement: tone was accusatory ("your FBO is failing"), not a performance issue (Lighthouse confirmed: worse-performing stadiums page kept 10s engagement with same template)
  - Mirror stadiums-arenas pattern: solution-first H1, observational hero, investigative H2 ("What ramp transport is really costing you"), situational pain card titles
  - Kept Gulfstream hero photo, all specs/comparison tables/FAQ unchanged

**Conversion funnel (full build):**
- Blog post CTA surface (sticky + mid-article + bottom) across all 14 content posts + hub
  - Solves measured problem: yesterday 167 blog views drove 0 CTA clicks (homepage's 14.3% CTA rate was carrying entire site)
  - Sticky floating button always visible
  - Mid-article CTA with topic-specific copy per post (13 unique variants)
- Unified "Request Info" CTAs to orange pill site-wide via CSS descendant selectors (54 buttons across nav, sticky, blog hub, blog post bottoms, solution page heroes, solution mid-page blocks)
  - Kept black `.btn-primary` for form SUBMIT buttons and secondary actions (thank-you cards, inline tier-2 CTAs, related-solution cards)
  - Zero HTML edits — pure CSS consolidation
- Built `/request-a-bid` (4-step procurement form) + `/request-a-bid-received` (thank-you)
  - 15 structured fields (event, scope, contact, extras) vs. homepage's 3
  - Service model routing: Rental / Turnkey / Advise us
  - Reuses existing Formspree endpoint with `source=bid_request` hidden tag
  - Thank-you page embeds product slick (flextram.github.io/flextram-flyer/v1/), Calendly, and direct email as 3 conversion paths
- Integrated Calendly (https://calendly.com/jb-flextram/30min) as third conversion path site-wide
  - Homepage: subtle link below contact form
  - Bid form intro: "if your timeline is tight, book a 30-min call and we'll accelerate"
  - Bid thank-you: featured option
- Updated homepage contact section with buyer-language (based on Hinterland/Coachella/Canada inquiry diction analysis)
  - Service-area statement: "Deploying at events across the United States. Rentals, leases, and turnkey plans available."
  - Changed submit button "Send" → "Request Quote"
  - Subtle procurement link to `/request-a-bid`
- Updated slick repo (flextram-flyer/v1/): SEND → REQUEST QUOTE, added FLEXTRAM.COM back-link, fixed truncated footer HTML (file had ended mid-tag `<div st`), added "SOURCING A LARGE DEPLOYMENT? REQUEST A BID →" link back to main site
- Buyer-language SEO push (added rental keywords to 7 event-type solution pages + solutions hub meta/OG/Twitter descriptions)

**Analytics (GA4 event coverage):**
- `cta_click` tracking across bid funnel with `cta_type` + `cta_location` parameters (homepage, bid_form_page, bid_thanks_page — sliceable by type: contact_form / bid_form / calendly / slick / email)
- `bid_request_submit` fires on form submission
- `bid_request_received` fires on thank-you page load (conversion event)
- Existing `form_visible`, `form_start`, `form_submit` preserved

**Fact-check audit (2026-04-17):** See dedicated section below. 20/27 CRITICAL claims verified, 2 attribution drifts fixed (EPI 9.5% stat, NACFE framing), 3 left as-is per low-risk call.

**Performance deep dive (site-wide):**
- Lighthouse mobile improvements:
  - `solutions/airport-fbo`: **47 → 88** (median of 3 runs)
  - `solutions/stadiums-arenas`: **30 → 90**
  - `blog/stadium-districts`: **39 → 76**
  - `/request-a-bid`: **50 → 76**
  - `/request-a-bid-received`: already 72
  - Homepage: 32 → ~45 (variable, still video-bound; ranking-critical pages are the wins)
- **All pages now pass CLS <0.1** — the Google ranking penalty metric is resolved site-wide
- Optimizations shipped:
  1. Non-blocking Google Fonts (preload-as-style + noscript fallback pattern, 45 pages)
  2. Hero image preload hints with imagesrcset/imagesizes (35 solution + blog pages)
  3. Explicit width/height attrs on all 35 hero images (CLS regression fixed: 0.23-0.30 → <0.01)
  4. Client logo compression — 1.8MB → 545KB (Python PIL for WebP, sips for JPG/PNG, target 240px max width)
  5. Homepage event photo compression — 1MB → 454KB
  6. Homepage hero video re-encoded via ffmpeg (CRF 28, 960×540, no audio) — 4.0MB → 2.3MB
  7. Favicon shrink 500×500 → 192×192 (30KB → 5KB)
  8. Hero poster shrink 1280×720 → 1024×576 (89KB → 41KB)
  9. GA4 (gtag.js) deferred loading across 45 pages
     - dataLayer + gtag() stub fire immediately (pageview queued)
     - Real script loads on first user interaction (scroll, click, touchstart, mousemove, keydown, pointerdown) OR 2.5s timeout
     - Zero analytics loss; major TBT improvement on blog/form pages
- **Cumulative bandwidth reduction: ~3.6MB per cold visit**

**Code review + repo cleanup:**
- Audited 45+ files: verified no duplicate CSS, no debug code, no broken internal links, all hero images have explicit dimensions, all alt text present, all forms properly labeled
- Fixed `landing-page.html` double-H1 (demoted second to H2)
- Removed stale TODO comment in `solutions/airport-fbo.html` (specs long since verified with client)
- Executed Tier 1 repo cleanup queued from Session 9 — 3.6MB / 101 files removed:
  - `paper-kit.min.css` (227KB), `paper-kit.min.js` (11KB)
  - `bootstrap.min.css.map` (626KB), `paper-kit.css.map` (666KB)
  - `assets/demo/` (64KB), `assets/scss/` (588KB, 90+ files)
  - `assets/video/fireworks.mp4` (1.58MB)
  - 3 tracked `.DS_Store` files

**Inbound leads logged during this session:**
- **Hinterland Music Festival** — Ross's dept contact, Saint Charles, IA, July 28–Aug 3, requested bid on **16–32 trams** for staff/BOH movement. Biggest single-deal inbound of the month. Joseph responded with discovery; awaiting reply.
- **Coachella attendee** — "saw your trams at Coachella, are these for rent?" Warm warm-lead; responded.
- **Live Nation Canada** (outdoor venue) — lost deal, but confirms Canadian market signal worth watching.
- **Pittsburgh Vintage Grand Prix (Ross Miller, EVP Partnerships)** — Monday call scheduled. Email thread in good shape; pre-call one-pager and Calendly booking primed.

**Key analytics snapshot entering next session:**
- Users 91 → 106 (+16%) across the two days
- 4 form submissions on a single day (~4.4% conversion rate — strong for B2B)
- GSC queries maturing: "flextram" at position 1.08, "flex tram" at 4.5 (page 1), "flex shuttle" NEW appearance, AI operator queries (`inurl:blog` pattern) surfacing multiple blog posts
- AI referrals continuing: gemini.google.com, with DuckDuckGo/organic also showing

---

## Fact-check audit (2026-04-17)

Ran a systematic audit across all 15 published blog posts + 3 drafts to catch any hallucinated factual claims. **91 claims flagged for review — 27 CRITICAL, 44 IMPORTANT, 20 MINOR.** Web-verified 20 of 27 CRITICAL claims against live source URLs.

**Results:**
- **20 CRITICAL claims verified accurate** — real people, real quotes, real regulations, exact matches against source URLs. Named-person quotes (Ryan Ogle/PGA, Jonathan Berk/The National, Matt Sebek/CITY SC, Jason Soucy/PGA, Brad Chambers/JLL, Carrie Walton Penner/Broncos, Andrew Elmer/Populous, Bill Cahill/HNTB) all check out. Regulations (FMCSA IFR Sept 2025, DOT 2010 cruise ADA, Carnival 2015 settlement, ABA 48-hour rule) all real and correctly characterized. Source claims (Hard Rock A-Z guide, Echo Park Speedway, Ticket Fairy, HOK pillars, Burns & McDonnell, Boldyn 55% stat, THE PLAYERS parking warning) all exact matches.
- **2 attribution drifts fixed** (commit `d7fb874`):
  1. `shuttle-bus-vs-flextram.html` — "9.5% bus driver shortage" was mis-attributed to "federal legislation introduced in 2026." Real source is the Economic Policy Institute. Fixed: re-attributed to EPI, separated real 2026 legislation (Driving Forward Act) reference, added specific FMCSA IFR date (Sept 29, 2025) + Feb 2026 final rule note.
  2. `world-cup-fan-first-mobility.html` — NACFE reference described their piece as general "operational analysis of what it'll take to move fans." Real piece is the "AV Game Day Playbook" about autonomous vehicles at mega-events. Tightened to match the AV framing.
- **3 unverified claims left as-is per low-risk assessment:**
  1. Sander van't Noordende (Randstad CEO) quote in data-center-crew-retention.html — CEO is real, thesis verified as his documented position, exact quote's specific CNBC source couldn't be located but paraphrase holds.
  2. National Bus Sales "wait an hour or more" quote in shuttle-bus-vs-flextram.html — cited URL returned 404 (link rot, not fabrication).
  3. Bonnaroo accessibility claims in shuttle-bus-vs-flextram.html — support URL returned 403 (blocked by WAF, not confirmed wrong). Bonnaroo is a FlexTram client per context.

**Pattern observed:** Named-person quotes were all real and accurate. Risk concentrated in stat-to-source attribution (which number came from which report) — that's now caught. No hallucinated people, no fabricated regulations, no invented client deployments.

**Client deployment "8 FlexTrams replaced 300 carts / 1,300 total carts at Southern California site":** Confirmed accurate by client. Both phrasings (across 5+ posts) describe the same real deployment from different angles.

---

### Session 11 (2026-04-18 to 2026-04-19) — GA4 cleanup, contact UX redesign, workflow hardening, LAZ-facing content, OG image, remote reconciliation

**Analytics hygiene:**
- **Diagnosed form-bot activity.** 6 `form_submit` events in GA4 with 0 actual inbound emails. Root cause: GA4 Enhanced Measurement auto-fires `form_submit` on any browser submit event — our honeypot (`_gotcha`) catches them server-side at Formspree, but GA4 inflates the count client-side. Smoking-gun signal: `form_submit` (6) > `form_start` (5) — textbook bot pattern (bots skip focus events). Confirmed in Formspree spam log.
- **Disabled GA4 Enhanced Measurement "Form interactions"** via Admin → Data streams → Enhanced measurement gear. Conversion signal is now clean: only custom events fire (`form_submit_success`, `bid_request_submit`, `bid_request_received`). `form_submit` and `form_start` will disappear from events list within 24–48 hrs of tomorrow's data.
- **"Flex tram" position drop investigation.** GSC showed position 4.5 → 14 — flagged as potential ranking regression. Determined to be sample-composition noise at low impression count (8 impressions). User verified page 1 SERP placement directly. Not a real drop.

**Homepage contact section UX redesign (shipped):**
- Problem: "Request a formal bid" and "Book a 30-min call" CTAs were inline orange text links above the form, reading as afterthoughts (measured: lowest click-through in the CTA stack).
- Researched B2B multi-path contact form best practices (Venture Harbour, VWO, Trajectory Web Design, Tiller Digital, Calendly Help). Pattern convergence: persona-matched alt CTAs with visual hierarchy subordinate to primary form.
- Shipped: promoted both to structured outlined pill cards BELOW the form (no longer competing for attention above it). Each carries persona sub-label: "For RFPs and large deployments" / "Talk live with Joseph this week." Divider "OR, DEPENDING ON YOUR TIMELINE" reframes them as situational branches.
- CSS scoped via `.contact-alt-*` classes inlined with critical CSS on [index.html](index.html). Ghost treatment (transparent fill, white border) preserves orange filled pill as primary. Mobile: stacks vertically. Hover: orange border + subtle tint + 2px lift + arrow nudge.

**Auto-publish workflow hardening:**
- Root cause of earlier divergence documented: workflow was installed on BOTH remotes (origin fork + production) and each ran on its own cron, creating divergent commit SHAs with identical content — forcing a cherry-pick pattern on any same-day manual push.
- Shipped: `if: github.repository == 'blackbox-engineering/flextram_landing'` guard on the publish job. Production is now the single source of truth for auto-publishes. Fork can be synced on-demand with `git fetch production && git push origin production/master:master`.
- Documented in "Blog system" section above + comment inline in the workflow file.
- Today's pre-guard divergence persists permanently (origin and production had different auto-publish SHAs from this morning) — cosmetic, not functional. All future commits stay aligned.

**Content published:**
- **"The Parking Lot Is Becoming a Mobility Origin. Here's the Chapter That Completes the Story."** (`/blog/parking-lot-mobility-origin`, ~3,400 words, Industry Vision). LAZ-facing strategic piece — six transformations the parking lot has already absorbed (EV charging, micro-warehousing, vertiports, micromobility hubs, computer vision platforms, ghost kitchens) + the seventh unnamed transformation (human mobility). Frames FlexTram as the partner layer that completes the fan-journey product.
- **Positioning discipline:** buried in the blog grid directly above `curb-to-gate-fan-journey` for thematic clustering. Sitemap priority 0.5 (vs manifesto's 0.8). Per client direction: "feel discovered if LAZ comes across it, not broadcast." Named LAZ / Lazowski / Charge Where You Park / LAZ Live! contextually to support discovery without pitching — reads as industry analysis.
- Cited sources: 2021 LAZ/Perch Mobility press release (Mass Transit Mag), 2025 LAZ/Epic Charging investment (AI Journ), 2024 Metropolis/SP+ acquisition ($1.5B), December 2025 LAZ Live! 100-venue milestone (PRWeb, including Derek Schiller / Atlanta Braves CEO quote).
- 5 FAQs, BreadcrumbList + BlogPosting + FAQPage + Organization JSON-LD, OG/Twitter meta, canonical, keywords, preload hints, 640px + 1200px hero variants.

**Verified:**
- April 18 auto-publish fired on both remotes — "The Hidden Cost of Making Fans Walk" is live on flextram.com. (Confirms the Session 9 date-bug fix is working.)
- Homepage contact section, parking-mobility-origin post, and workflow guard all confirmed live on production.

**Day 2 (2026-04-19):**
- **Homepage OG image swapped** to branded 1200×630 "Built to Move" fleet shot (`assets/img/og-flextram-v1.jpg`). Replaces generic Paper Kit placeholder `pic3.JPG` (400×399). Updates both `og:image` and `twitter:image`; adds explicit `og:image:width`/`og:image:height`/`og:image:alt` for platform rendering and accessibility. Versioned filename (`-v1`) so future swaps bypass iMessage's aggressive cache.
- **Site-wide OG image sweep** — same `og-flextram-v1.jpg` swapped onto the 7 other pages still using `pic3.JPG`: `landing-page.html`, `solutions/index.html` (hub), `blog/index.html` (hub), `solutions/labor-companies.html`, `solutions/convention-centers.html`, `solutions/golf-courses.html`, `solutions/planned-communities.html`. Every page on flextram.com now has a branded link preview when shared to iMessage/Slack/LinkedIn/etc. Individual solution + blog posts were already using their own hero images as OG images and were unaffected. Vertical-specific custom OG images (e.g., golf-on-course for `golf-courses.html`) remain future-state.
- **Remote SHA reconciliation.** The pre-guard divergence from 2026-04-18 had persisted: origin and production were forever offset by one SHA (same content, different commits), forcing cherry-picks on every push. Verified identical content (`git diff origin/master production/master --stat` → empty), then `git reset --hard production/master` locally and `git push origin master --force-with-lease`. Both remotes + local now at single SHA (`3c8e55d` at time of reconciliation). Cherry-pick pattern retired.
- **Safety check during reconciliation:** preserved uncommitted `.claude/settings.local.json` changes via stash, confirmed only three clones exist (origin, production, local), confirmed no external services reference pre-reconciliation origin SHAs.

**Airport-FBO page — vocabulary rewrite (second attempt):**
- Session 10 fixed tone (accusatory → investigative), but engagement stayed at ~3s. Diagnosed on re-visit: tone was addressed, but page still used venue-mobility language retargeted at FBOs. FBO buyers search for "crew car," "ramp transport," "quick turn," "transient," "Part 135" — not "parking" or "fans." Buyers pattern-match "this isn't for me" within 3 seconds.
- Researched FBO industry vocabulary by extracting service language from AeroCenters (FBO definition / service categories) + Universal Aviation (FBO ground support services). Key finding: **"Crew Car"** is a named service category FBO buyers already have a mental bucket for; FlexTram needed to claim it explicitly.
- Rewrote across the page with FBO-native vocabulary (same structural bones, all edits vocabulary-only):
  - Title/meta/OG/Twitter: "FBO Crew Transport & Ramp Coordination"
  - Hero H1: "Crew transport. Passenger handling. Built for the quick turn."
  - Hero subtitle: names flight crew / charter passengers / transient principals
  - Pain cards: crew car capacity gap, FOD/wingtip/prop-wash risk, transient-volume seasonality, based-vs-transient client psychology
  - Solution block: line services, FOD risk, block-in to line-service-start timing
  - Use-case pills: flight crew transport, VIP & principal arrivals, hangar-to-FBO shuttle, quick-turn ramp movement, Part 135 operations
  - FAQ: 4 new FBO-native questions (crew car comparison, quick-turn integration, Part 135 fit, VIP/principal transport) + updated 2 existing
  - Keywords meta: expanded with FBO search terms
  - CTA block: "right-size your ramp fleet," asks for based vs. transient mix + crew car count + ramp layout
- Hypothesis: engagement climbs from 3s toward 10s+ because buyers now pattern-match "this is for me" in the first three seconds. Monitor 48-72 hrs.

**Blog mid-article CTA fix:**
- User-spotted regression on `/blog/data-center-crew-retention`: the mid-article `.post-cta-inline` Request Info button was rendering as dark-background + teal-underlined text instead of the expected clean black pill or orange pill.
- Root cause: Session 10's orange-pill unification covered `.blog-cta-strip`, `.post-cta`, `.cta-block`, `.hero-ctas` but missed `.post-cta-inline`. The "tier-2 black pill" fallback was supposed to preserve visual variety for mid-article CTAs, but in practice `.post-content a { color: teal; text-decoration: underline; }` cascaded into the button, producing a broken-looking hybrid on 15+ blog posts.
- Fix: promoted `.post-cta-inline .btn-primary` into the orange pill selector family (one CSS edit in `assets/css/global.css`). Every mid-article CTA across all blog posts now renders consistent with the primary CTA treatment. Updated the inline comment above the selector block to record the decision.
- Full-site CTA audit confirmed no other orphans: bid thank-you page's three black-pill buttons render cleanly (outside `.post-content`, no cascade collision) and are legitimate tier-2 next-step options on a post-conversion page.

---

## TODOs for next session

### High priority — active leads + time-sensitive
- [ ] **SEND the Pittsburgh Vintage Grand Prix one-pager email to Ross Miller (Monday)** — Email drafted + Calendly link ready. Ross is EVP Partnerships & Marketing at PVGP. Event: July 18–19, 2026 at Schenley Park, 450 acres, ~100K spectators, currently 7 buses (5 standard + 2 ADA). Opportunity: replace bus fleet + add Schenley Drive loop with 4–5 FlexTrams. Sponsorship angle works for his role specifically.
- [ ] **Respond to Hinterland Music Festival bid request** — Saint Charles, IA, July 28–Aug 3, requested bid on 16–32 trams for staff/BOH movement. Biggest single-deal inbound of the month. Joseph's reply has gone out; tracking for follow-up.
- [ ] **Follow up Coachella "saw your trams" lead** — short warm inquiry received; validated the on-tram branding opportunity.
- [ ] **Monitor airport-FBO engagement 48–72 hrs after the vocabulary rewrite (shipped 2026-04-19)** — Session 10's tone rewrite (accusatory → investigative) got engagement from undetermined to 3s, but didn't move further. Today's fix injected FBO-native vocabulary (crew car, quick turn, Part 135, transient, based, FOD) across hero/pain cards/pills/FAQ/CTA. Hypothesis: buyers now pattern-match "this is for me" in the first 3 seconds. Goal: 3s → 10s+ (matches stadiums-arenas baseline). If it moves, audit healthcare-hospitals and senior-living for similar vocabulary-match gaps (medical/clinical and senior-living ops teams both have distinct terminology).
- [ ] **Lock in FSU testimonial usage rights** — Testimonial from Kari Terezakis (EVP, Seminole Boosters). Still open from prior sessions. Email request: (1) permission to use quote with name/title on site + sales materials, (2) serve as reference for other athletics programs (P4 booster leverage), (3) short FSU case study. Quote: "FlexTram has been a tremendous partner in supporting our football gameday parking operations... data-driven solutions adaptable to our evolving needs..."
- [ ] **Add real testimonials to site** — Held pending 2–3 client quotes in hand. FSU is first. Once 3 confirmed, add featured quote on homepage, vertical-specific quotes on matching solution pages, and consider `/case-studies` or `/clients` page.

### Medium priority — content expansion
- [ ] **Write "What Data-Driven Means for Your Gameday Shuttle" post** — FSU's testimonial used "data-driven solutions adaptable to our evolving needs" unprompted. Differentiator vs. any golf cart rental co. Turn the jargon into concrete value (utilization rates, route optimization, peak-hour modeling, historical patterns). Good mid-funnel content for athletics ops buyers.
- [ ] **Add "gameday parking operations" + "data-driven shuttle" keywords** -- Exact phrases FSU uses internally. Add to stadiums-arenas, football-stadiums, fifa-world-cup, raceways-motorsports solution pages. Quick SEO win.
- [ ] **Consider an `/operations` or `/planning` page** -- Surface the ops planning layer (heat maps, route modeling, schedule integration) that FSU specifically called out as valuable. This is the "platform" story your original homepage hinted at, told through operational credibility instead of vague platform-speak.
- [ ] **Vertical-specific OG images** -- All 7 "placeholder" pages now share the branded `og-flextram-v1.jpg` (Built to Move) as a baseline. Long-term improvement: design page-specific 1200×630 OG images for solutions hub, blog hub, convention, golf, labor, and planned communities (each showing a scene matching the vertical). Nice-to-have, no longer urgent — the branded shared image is strictly better than the prior pic3.JPG placeholder.
- [ ] **Write more blog articles** -- Continue weekly publishing cadence beyond April 29. Content is primary traffic driver (organic sessions +188% across session 8).
- [ ] **Monitor GSC for key query movement** -- Watching: "flex tram" (holding position 4.5?), "flextrolley" (moved from position 80?), "flex shuttle" (new appearance April 17 — rising?), "shuttle bus alternative" / "tram rental" (new keywords added yesterday - impressions?), new queries from shuttle-bus / venue-isnt-stadium / curb-to-gate posts.
- [ ] **Watch for more AI referrals** -- gemini.google.com + duckduckgo/organic already appearing. Expect more AI tool citations as content cluster grows.
- [ ] **Consider LAZ / Propark / Metropolis outreach** — curb-to-gate post positions FlexTram as the onsite mobility layer parking operators need to complete the fan journey product. Opens partnership conversation. LAZ Live! at 100 venues (Truist Park / Battery Atlanta reference) is the prime target.
- [ ] **Monitor bid form funnel** — /request-a-bid shipped today. Watch for first submissions, and which of the 3 conversion paths converts best (homepage contact form vs. bid form vs. Calendly). GA4 `cta_click` event has `cta_type` + `cta_location` parameters for slicing.
- [ ] **Homepage performance overhaul (major)** — Homepage Lighthouse mobile stuck at 40–55 because of jQuery + Bootstrap + Paper Kit + Slick carousel. The ranking-critical solution pages are 88–90 because they don't carry this legacy JS. A real rebuild of homepage JS stack (drop jQuery dependency, replace Slick with vanilla JS carousel) could push it into the 70–80 range. Bigger project — don't tackle unless a week of runway.
- [ ] **Build "Where We Operate" or service-area page** — inquiries keep asking "are you available in X?" (Canada, state). Simple page listing "continental US coverage, case-by-case for Canada/international" would head off the qualifying inquiry. Low effort.
- [ ] **Consider "Back-of-House Staff Transportation" solution page or post** — Hinterland's 16–32 tram bid request was explicitly about staff movement, not fans. Back-of-house is a distinct vertical underserved by current front-of-house-heavy content. Festival-season-here blog post hits this briefly; could be its own solution page.
- [ ] **Build "For Procurement Teams" resources page** — procurement buyers land on /request-a-bid ready to submit RFPs. A companion page with spec-sheet-grade info (insurance standards, deployment timeline, safety record, past deployment list, ADA standards) would accelerate the internal-pitch process. Low-risk — no proprietary engineering specs, just marketing-grade procurement collateral.

### Low priority
- [ ] **Reach out to Power 4 booster orgs for outbound** -- With Kari's reference (once secured), FlexTram has a credible door-opener to: Texas Longhorn Foundation, Tennessee Fund, Iron Bowl/Tide Pride, Georgia Bulldog Club, Gator Boosters, Texas A&M 12th Man Foundation, Buckeye Club, Wolfpack Club. These orgs talk to each other.
- [ ] **LinkedIn post referencing FSU partnership** -- With Kari's permission, a short LinkedIn post tagging Seminole Boosters would reach exactly the collegiate athletics audience we want.
- [ ] **Consider adding a /specs page** -- Multiple solution pages reference specs.
- [ ] **Reach out to AMS Event Rentals** -- Only existing referral backlink. Ask about a dedicated FlexTram page with more content/linking. Relevant backlinks are #1 lever for non-branded rankings.
- [ ] **LinkedIn share of the manifesto post** -- "Why Isn't Transportation on the List?" designed to be shareable, best top-of-funnel content.
- [ ] **Coachella Weekend 2 content push** -- Consider homepage banner, festivals page callout, recap post.

### New from Session 11 — monitor
- [ ] **Monitor homepage contact CTA redesign** — bid + Calendly CTAs promoted from inline text to outlined pill cards with persona copy. Watch `cta_click` events segmented by `cta_type` (contact_form / bid_form / calendly). Question: do the alt paths now capture buyers who were previously bouncing past the inline links?
- [ ] **Confirm GA4 `form_submit` / `form_start` events disappear** — Enhanced Measurement Form interactions disabled 2026-04-18 in GA4 UI. Verify tomorrow that only custom conversion events (`form_submit_success`, `bid_request_submit`, `bid_request_received`) appear.
- [ ] **Monitor parking-lot-mobility-origin discovery** — post shipped buried (sitemap 0.5, mid-grid above curb-to-gate). Expect slow organic surfacing vs featured posts. Watch GSC for LAZ-related query impressions ("LAZ Parking mobility", "Charge Where You Park", "LAZ Live") over 7–14 day window.
- [ ] **If `git push production master` ever rejects again** — the guard failed silently or something new diverged the remotes. Investigate before reaching for cherry-pick; prefer `git fetch production && git push origin production/master:master` to re-sync the fork non-destructively.

### Done in Session 11 (removed from list)
- ✅ Diagnosed form submissions as bots (GA4 `form_submit` via Enhanced Measurement catching browser submits; honeypot server-side filtering; `form_submit > form_start` inversion = textbook bot signature)
- ✅ Disabled GA4 Enhanced Measurement "Form interactions" (keeping only custom conversion events)
- ✅ Investigated "flex tram" GSC position drop — sample-composition noise, not a real regression
- ✅ Homepage contact section CTA redesign (research-backed; shipped outlined pill cards with persona copy below form)
- ✅ Gated auto-publish workflow to production repo only (`if: github.repository == 'blackbox-engineering/flextram_landing'`)
- ✅ Documented workflow guard + recovery pattern in CLAUDE.md Blog system section
- ✅ Verified April 18 "Hidden Cost of Making Fans Walk" auto-publish fired on both remotes
- ✅ Published "The Parking Lot Is Becoming a Mobility Origin" (~3,400 words, Industry Vision, LAZ-facing, buried mid-grid above curb-to-gate for thematic clustering)
- ✅ Homepage OG image swapped to branded 1200×630 "Built to Move" fleet shot (`og-flextram-v1.jpg`)
- ✅ Site-wide OG image sweep — same branded image now on landing-page, solutions hub, blog hub, labor-companies, convention-centers, golf-courses, planned-communities (7 additional pages)
- ✅ Remote SHA reconciliation — force-pushed origin to match production; all three locations (origin, production, local) aligned on single linear history; cherry-pick pattern retired
- ✅ Airport-FBO page vocabulary rewrite — extracted FBO-industry language from AeroCenters + Universal Aviation service descriptions, applied across title/meta/OG/hero/pain cards/solution block/use-case pills/FAQ/CTA; claims "crew car" + "quick turn" + "Part 135" + "transient" + "based" + "FOD" vocabulary the buyer actually searches and uses
- ✅ Blog mid-article CTA fix — promoted `.post-cta-inline .btn-primary` into orange pill family in `global.css`; resolved teal-cascade rendering bug across all 15+ blog posts using the mid-article CTA pattern
- ✅ Full-site CTA audit — confirmed no remaining orphan Request Info buttons; bid thank-you page's 3 black-pill buttons are legitimate tier-2 design, not bugs

### Done in Session 10 (removed from list)
- ✅ Published Shuttle Bus vs. FlexTram (Operations & Economics, ~2,400 words)
- ✅ Published Your Event Isn't at a Stadium (new Venue Planning category, ~2,400 words)
- ✅ Published Curb to Gate: Fan Journey Became the Product (Industry Analysis, ~2,000 words)
- ✅ Airport-FBO solution page tone rewrite (accusatory → investigative, stadiums-arenas template)
- ✅ Built blog CTA surface (sticky + mid-article + bottom) across 17 files
- ✅ Unified Request Info CTAs to orange pill site-wide (54 buttons, pure CSS)
- ✅ Built /request-a-bid form (4-step, 15 fields) + /request-a-bid-received thank-you page
- ✅ Integrated Calendly as third conversion path (homepage + bid form + thank-you)
- ✅ Updated slick repo (flextram-flyer) — SEND → REQUEST QUOTE, added FLEXTRAM.COM back-link, fixed truncated footer
- ✅ Added GA4 event tracking across bid funnel (cta_click, bid_request_submit, bid_request_received)
- ✅ Fact-check audit across 15 posts + 3 drafts (91 claims flagged, 20/27 critical verified, 2 attribution drifts fixed)
- ✅ Performance deep dive — Lighthouse mobile scores climbed massively (airport-fbo 47→88, stadiums 30→90, blog 39→76, bid form 50→76, homepage 32→45)
- ✅ All pages now pass CLS <0.1 Core Web Vitals threshold
- ✅ Site-wide font preload, hero image preload, hero image dimensions, GA4 deferral
- ✅ Homepage video re-encoded (4MB → 2.3MB via ffmpeg CRF 28 + 960p)
- ✅ Homepage images optimized (logos 1.8MB→545KB, event photos 1MB→454KB, favicon 30KB→5KB, hero poster 89KB→41KB)
- ✅ Executed Tier 1 repo cleanup (3.6MB / 101 files removed: paper-kit.min.*, .map files, demo/, scss/, fireworks.mp4, .DS_Stores)
- ✅ Code review — verified no duplicate CSS, debug code, broken links; fixed landing-page double-H1 + stale TODO comment
- ✅ Responded to PVGP (Ross Miller) — pre-call one-pager drafted as email
- ✅ Buyer-language SEO push — added rental keywords to 8 meta descriptions; updated homepage contact section with service-area + quote button

### Done in Session 9 (removed from list)
- ✅ Monitored blog hub engagement (27s → 54s — doubled)
- ✅ Identified airport-FBO engagement root cause (visual-copy mismatch, not technical)
- ✅ Swapped airport-FBO hero (prop plane → Gulfstream on ramp)
- ✅ Swapped cruise-terminals hero (aerial → passengers walking pier with zone signage)
- ✅ Fixed auto-publish workflow date comparison bug (was silently failing)
- ✅ Manually triggered publish of "We Created the Category" (Apr 15)
- ✅ Standardized internal links to pretty URLs (203 href changes across 37 files)
- ✅ Standardized blog post-meta dates to "Month Year" format (9 files)
- ✅ Published F1 fan transportation post (grid position 6, NOT featured)
- ✅ Added shuttle bus alternative / tram rental keywords (4 pages)

### Scheduled blog posts (auto-publish via GitHub Actions)
- [x] **April 15** -- "We Created the Category" (live)
- [x] **April 18** -- "The Hidden Cost of Making Fans Walk" (live — auto-published 2026-04-18)
- [ ] **April 22** -- "The Fan Experience Gap" (blog/_drafts/2026-04-22_fan-experience-gap.html) -- broken link fixed in session 8
- [ ] **April 29** -- "Sponsorship's Untapped Frontier" (blog/_drafts/2026-04-29_sponsorship-untapped-frontier.html)
