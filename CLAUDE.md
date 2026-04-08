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

### Pages (20 total)
- `index.html` -- Main FlexTram landing page (video hero, client logos, contact form)
- `landing-page.html` -- Secondary landing page
- `system.html` -- System/product details page with before/after animation
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

### Key directories
- `assets/css/` -- Stylesheets (Bootstrap, Paper Kit, `custom.css`, `global.css`, `solutions.css`, `use-case.css`)
- `assets/img/` -- Images (hero photos, event photos, logos, favicon)
- `assets/img/logos/` -- Client logos for scrolling carousel (26 logos)
- `assets/img/solutions/` -- Industry images for solutions cards (17 images)
- `assets/img/hero-*.jpg` -- Hero photos for solution sub-pages (10 photos)
- `assets/js/` -- JavaScript
- `_source_files/` -- Original source images (gitignored)

### Fonts
- **Homepage:** Inter (body) + Montserrat (headings) via Google Fonts
- **Solutions pages:** DM Sans (body) + Instrument Serif (headings) via Google Fonts

### SEO setup
- `sitemap.xml` -- All 20 pages listed
- `robots.txt` -- Allow all, sitemap reference
- JSON-LD structured data: Organization, Product, BreadcrumbList schemas
- Schema.org FAQPage microdata on all 17 industry pages (102+ FAQ questions)
- OG/Twitter meta tags on all pages
- Canonical URLs on all pages pointing to flextram.com
- Keyword-rich alt tags on every image across the site

### Contact form
- Formspree endpoint: `https://formspree.io/f/mvzzoarr`
- Form ID: `#contact-form` (used as anchor target from all CTAs)
- All solution page "Request Info" buttons link to `/#contact-form`

### Client logos in carousel (26)
Tesla, Amazon, NASCAR, Live Nation, AEG, Coachella, Stagecoach, Lollapalooza, Bonnaroo, EDC, Rolling Loud, Insomniac, C3 Presents, Sick New World, FloydFest, When We Were Young, Lovers & Friends, Innings Festival, Desert Daze, Besame Mucho, FSU, Ingredion, LAZ Parking, Savannah Bananas, Dreamstate, ZA Queen Mary

### Vehicle specs (used across all pages)
- Passenger capacity: 16-27 seated
- ADA compliant: Standard
- Operators needed: 1 driver
- **NOT electric** -- use "compact", "small format", or "agile" (never "electric")
- Top speed and operating range removed (not relevant to marketing)

### CNAME
Set to `www.flextram.com`

## Dev server
No npm/build step needed. Run from repo root:
```
python3 -m http.server 8080
```
Then open http://localhost:8080

## Git workflow
```bash
# Push to both remotes (fork + production)
git add [files] && git commit -m "message"
git push origin master && git push production master
```
Note: `gh` CLI installed at `/usr/local/bin/gh`, authenticated as FlexTram account.

## Status (2026-04-07)

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
- Lighthouse audit: SEO 100, Best Practices 100, Accessibility 83→improved, Performance 46 (homepage) / 63 (sub-pages)
- Registered flextram.com in Google Search Console and submitted sitemap.xml

---

## TODOs for next session

### High priority
- [ ] **Verify vehicle specs** -- Placeholder spec (16-27 passengers) needs confirmation from FlexTram team
- [ ] **Add real testimonials** -- All testimonials are anonymous placeholders; remove or replace with named quotes

### Medium priority
- [ ] **Improve homepage performance score** -- Currently 46; main issues are render-blocking CSS (bootstrap + paper-kit), unused CSS (~446KB), and oversized images on mobile
- [ ] **Custom OG images** -- Create dedicated social sharing images instead of reusing card images

### Low priority
- [ ] **Consider adding a /specs page** -- Multiple solution pages reference specs
- [ ] **Fix heading order on homepage** -- Lighthouse flagged non-sequential heading levels
- [ ] **Improve color contrast** -- Some text/background combos don't meet WCAG AA ratio
