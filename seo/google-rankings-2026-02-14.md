# Google Organic Rankings — February 14, 2026

Parthenon Diner (parthenondiner.com) — Branford, CT

Rankings captured via web search API. Does not reflect Google Maps/Local Pack results, which vary by searcher location.

## "Greek food Branford CT" — #1

1. parthenondiner.com
2. TripAdvisor (Greek Restaurants in Branford)
3. Yellow Pages (Greek Restaurants in Branford)
4. Allmenus.com
5. Yelp (Greek near Branford)
6. CTvisit.com (Parthenon listing)
7. Shoreline Chamber of Commerce (Parthenon listing)
8. Sirved (Greek Cuisine in Branford)
9. parthenondiner.com/about
10. Urban Greek

## "diner in Branford CT" — #2

1. Branford Townhouse Restaurant
2. **parthenondiner.com**
3. Sky Diner of Branford
4. Yelp (Diners near Branford)
5. Twin Pines Restaurant Diner
6. CTvisit.com (Parthenon listing)
7. Instagram (@parthenonbranford)
8. Sky Diner (TripAdvisor)
9. TripAdvisor (Dinner Restaurants in Branford)
10. Sky Diner (Toast site)

## "breakfast Branford CT" — Not in top 10

1. TripAdvisor (Breakfast Restaurants in Branford)
2. CT Bites (Tasty Yolk opens in Branford)
3. Kelsey House Bed & Breakfast
4. Hornets Nest Deli
5. Yelp (Breakfast Restaurants near Branford)
6. Branford Townhouse Restaurant
7. Stony Creek Market
8. Sky Diner of Branford
9. Visit New Haven (Breakfast Connections)
10. Branford Breakfast Connections (NetWaiter)

## "restaurants in Branford CT" — Not in top 10

1. TripAdvisor (10 Best Restaurants in Branford)
2. Cafe Fiore Restaurant
3. Little Pub Branford
4. Lockworks Tavern
5. Home Restaurant
6. OpenTable (Branford Center Historic District)
7. Little Riggs
8. Saltbrick Prime Steakhouse
9. Yelp (Restaurants on the Water near Branford)
10. La Luna Ristorante

## Notes

- Rankings from web search API, not a browser session from a Branford IP. Actual results may vary by location and personalization.
- Google Maps/Local Pack rankings not captured — requires tools like BrightLocal or Local Falcon for grid-based tracking.
- Parthenon dominates "Greek food" with 4 listings in the top 10 (site, CTvisit, Chamber, About page).
- "Breakfast" and "restaurants" are high-competition generic terms dominated by aggregators and newer competitors.

## Changes Made — February 14, 2026

To target "breakfast Branford CT" (currently not in top 10), created two dedicated breakfast landing pages:

- **`/breakfast-branford`** — Branford-specific all-day breakfast page targeting "breakfast Branford CT", "breakfast near me Branford", "brunch Branford CT". Includes all 55 breakfast menu items with prices, Branford Restaurant structured data (JSON-LD), location-specific intro copy (Route 1, Branford Green, East Main Street), and Branford order/hours CTA.
- **`/breakfast-old-saybrook`** — Old Saybrook-specific all-day breakfast page targeting "breakfast Old Saybrook CT". Same 55 items, Old Saybrook Restaurant structured data, location-specific copy (Boston Post Road, Westbrook, Essex, Old Lyme), and Old Saybrook order/hours CTA.

Previously, all breakfast content lived behind `/menu#breakfast` — a hash fragment Google treats as the same URL as `/menu`, giving breakfast no dedicated indexable page. Each new page has:

- Full menu with prices in JSON-LD `MenuSection`/`MenuItem` schema (6 sections, 55 items)
- `Restaurant` structured data for the specific location
- `BreadcrumbList` schema (Home > Location > Breakfast)
- Cross-link to the other location's breakfast page
- Internal links updated across all 10 existing site pages (footers, menu cards, redirects)

## Changes Made — February 15, 2026

To target "restaurants in Branford CT", "restaurants in Old Saybrook CT", "breakfast Branford CT", and "breakfast Old Saybrook CT" (all currently not in top 10), created a blog section with 4 local SEO guide posts:

### New Pages

- **`/blog/`** — Blog listing page linking to all 4 posts
- **`/blog/best-restaurants-branford-ct`** — "Best Restaurants in Branford, CT: A Local's Guide to Shoreline Dining" — features 7 restaurants (Parthenon Diner, Rossitto's Ristorante, Saltbrick Prime, Dockside Seafood, The Tasty Yolk, Crostini, Sky Diner)
- **`/blog/best-restaurants-old-saybrook-ct`** — "Best Restaurants in Old Saybrook, CT: Where to Eat on the Lower Shoreline" — features 8 restaurants (Parthenon Diner, Fresh Salt, Liv's Oyster Bar, Alforno Trattoria, Penny Lane Pub, Himalaya Cafe, Little Pub, Sip Wine Bar)
- **`/blog/best-breakfast-branford-ct`** — "Best Breakfast in Branford, CT: Where Locals Go for Morning Favorites" — features 5 spots (Parthenon Diner, The Tasty Yolk, Crostini, Sky Diner, Perkatory Coffee Roasters)
- **`/blog/best-breakfast-old-saybrook-ct`** — "Best Breakfast in Old Saybrook, CT: Morning Spots Worth Waking Up For" — features 6 spots (Parthenon Diner, Tea Kettle, Mirsina's, Fresh Salt, Paperback Cafe, Ashlawn Farm Coffee)

### Strategy

Each post is a genuine ~1,500–2,000 word "local's guide" featuring real, currently operating restaurants. Parthenon Diner is listed first and most prominently in each post with 3+ paragraphs and internal links to location pages (`/branford`, `/old-saybrook`), menu (`/menu`), and breakfast pages (`/breakfast-branford`, `/breakfast-old-saybrook`). Other restaurants get 1–2 paragraphs each. Every restaurant entry includes "What to Order" recommendations and a details block with address, phone, and hours.

### SEO Elements Per Post

- `BlogPosting` JSON-LD schema (headline, description, datePublished, author, publisher)
- `BreadcrumbList` JSON-LD schema (Home > Blog > Post Title)
- Full meta tags: title, description, canonical URL, Open Graph (type: article), Twitter Card
- Keyword-rich H1 with location name, H2 for each restaurant, H3 for "What to Order" and "Details"
- Internal links to Parthenon Diner location and menu pages
- CTA sections linking to Toast online ordering

### Site-Wide Updates

- Blog link added to desktop nav, mobile nav, and footer on all 10 existing HTML pages
- 5 new URLs added to sitemap.xml (blog index + 4 posts)
- Blog section with 5 links added to llms.txt
