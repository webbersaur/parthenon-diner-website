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
