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

---

## TODOs for next session

### High priority
- [ ] **Follow up on Pittsburgh motorsport festival inbound** -- 100K-spectator July event in a Pittsburgh city park, currently using shuttle buses, wants to rent a tram system. Came in same day F1 post published. Respond with discovery questions (event dates, footprint, shuttle setup, parking, ADA) and propose a discovery call. Likely Pittsburgh Vintage Grand Prix / Schenley Park.
- [ ] **Lock in FSU testimonial usage rights** -- Testimonial from Kari Terezakis, Executive VP of Seminole Boosters (FSU Athletics fundraising arm, ~$40M/year 501c3). Email her to:
  1. Request permission to use the quote with name + title on website, sales materials
  2. Ask if she'd serve as a reference for other athletics programs (huge leverage into P4 booster orgs - Texas, Tennessee, Georgia, Ohio State, etc.)
  3. Pitch a short FSU case study (400-600 words with photos)
  The quote itself: "FlexTram has been a tremendous partner in supporting our football gameday parking operations... data-driven solutions adaptable to our evolving needs... important role in enhancing the overall gameday experience for our patrons."
- [ ] **Investigate airport-FBO + cruise engagement** -- Hero images swapped today (prop plane → Gulfstream on FBO ramp; aerial ships → passengers walking pier with zone signage). Monitor if engagement climbs over next 3-5 days on fresh traffic.
- [ ] **Verify April 18 auto-publish went live** -- "The Hidden Cost of Making Fans Walk" scheduled for Apr 18. Workflow date comparison bug was fixed today so this should deploy correctly.
- [ ] **Add real testimonials to site** -- Hold deployment until 2-3 client quotes in hand for balance. FSU is first. CLAUDE.md TODO still open from prior sessions. Once 3 quotes in hand, add featured quote to homepage below hero, vertical-specific quotes on matching solution pages, and consider a `/case-studies` or `/clients` page.
- [ ] **Verify external quotes in blog posts** -- Posts cite Pam Kramer (SportsTravel), Matt Sebek (IAVM), Andrew Elmer/Populous, Bill Cahill/HNTB. Confirm attribution before sharing widely.

### Medium priority
- [ ] **Write "Shuttle Bus vs. Tram" comparison post** -- Pittsburgh inbound confirmed "shuttle bus alternative" is an underserved keyword cluster. Same treatment as golf cart comparison cards but for event operators already spending on bus fleets. Bigger audience / bigger budgets.
- [ ] **Write "City Park / Urban Public Events" content** -- Pittsburgh lead surfaced a vertical we don't cover: motorsport/festival events in public city parks. Distinct from stadiums (permanent, purpose-built) and festivals (usually private ground). Examples: Pittsburgh Vintage GP, Grand Prix of Long Beach, Baltimore GP.
- [ ] **Write "What Data-Driven Means for Your Gameday Shuttle" post** -- FSU's testimonial used "data-driven solutions adaptable to our evolving needs" unprompted. That's a differentiator vs. any golf cart rental co. Turn the jargon into concrete value (utilization rates, route optimization, peak-hour modeling, historical patterns). Good mid-funnel content for athletics ops buyers.
- [ ] **Add "gameday parking operations" + "data-driven shuttle" keywords** -- Exact phrases FSU uses internally. Add to stadiums-arenas, football-stadiums, fifa-world-cup, raceways-motorsports solution pages. Quick SEO win.
- [ ] **Consider an `/operations` or `/planning` page** -- Surface the ops planning layer (heat maps, route modeling, schedule integration) that FSU specifically called out as valuable. This is the "platform" story your original homepage hinted at, told through operational credibility instead of vague platform-speak.
- [ ] **Custom OG images** -- 6+ pages still use generic pic3.JPG (solutions hub, blog hub, convention, golf, labor, planned communities).
- [ ] **Write more blog articles** -- Continue weekly publishing cadence beyond April 29. Content is primary traffic driver (organic sessions +188% across session 8).
- [ ] **Monitor GSC for key query movement** -- Watching: "flex tram" (holding position 4.5?), "flextrolley" (moved from position 80?), "shuttle bus alternative" / "tram rental" (new keywords added today - impressions?), new queries from manifesto/retention/F1/golf posts.
- [ ] **Watch for more AI referrals** -- gemini.google.com + duckduckgo/organic already appearing. Expect more AI tool citations as content cluster grows.

### Low priority
- [ ] **Reach out to Power 4 booster orgs for outbound** -- With Kari's reference (once secured), FlexTram has a credible door-opener to: Texas Longhorn Foundation, Tennessee Fund, Iron Bowl/Tide Pride, Georgia Bulldog Club, Gator Boosters, Texas A&M 12th Man Foundation, Buckeye Club, Wolfpack Club. These orgs talk to each other.
- [ ] **LinkedIn post referencing FSU partnership** -- With Kari's permission, a short LinkedIn post tagging Seminole Boosters would reach exactly the collegiate athletics audience we want.
- [ ] **Consider adding a /specs page** -- Multiple solution pages reference specs.
- [ ] **Reach out to AMS Event Rentals** -- Only existing referral backlink. Ask about a dedicated FlexTram page with more content/linking. Relevant backlinks are #1 lever for non-branded rankings.
- [ ] **LinkedIn share of the manifesto post** -- "Why Isn't Transportation on the List?" designed to be shareable, best top-of-funnel content.
- [ ] **Coachella Weekend 2 content push** -- Consider homepage banner, festivals page callout, recap post.

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
- [x] **April 15** -- "We Created the Category" (should be live — verify)
- [ ] **April 18** -- "The Hidden Cost of Making Fans Walk" (blog/_drafts/2026-04-18_hidden-cost-of-making-fans-walk.html)
- [ ] **April 22** -- "The Fan Experience Gap" (blog/_drafts/2026-04-22_fan-experience-gap.html) -- broken link fixed in session 8
- [ ] **April 29** -- "Sponsorship's Untapped Frontier" (blog/_drafts/2026-04-29_sponsorship-untapped-frontier.html)
