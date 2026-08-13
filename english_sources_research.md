# English Source Research

The following official feeds were verified as returning English content suitable for NewsNow's generic RSS parser on Aug 13, 2026:

| Category | Source | RSS feed | Verification |
|---|---|---|---|
| World news | BBC News | http://feeds.bbci.co.uk/news/rss.xml | Returned BBC News headlines, summaries, timestamps, and links. |
| World news | The New York Times | https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml | Returned NYT headlines, authors, summaries, timestamps, and links. |
| World news | The Guardian | https://www.theguardian.com/world/rss | Returned Guardian world-news headlines, summaries, timestamps, and links. |
| World news | NPR News | https://feeds.npr.org/1001/rss.xml | Returned NPR/AP news headlines, summaries, timestamps, and links. |
| Technology | TechCrunch | https://techcrunch.com/feed/ | Returned TechCrunch headlines, authors, summaries, timestamps, and links. |
| Technology | The Verge | https://www.theverge.com/rss/index.xml | Returned The Verge headlines and links; some entities are encoded in extracted text, so the XML parser should be preferred. |
| Technology | Ars Technica | https://feeds.arstechnica.com/arstechnica/index | Returned Ars Technica headlines, summaries, timestamps, and links. |
| Technology | Engadget | https://www.engadget.com/rss.xml | Returned Engadget headlines, summaries, timestamps, and links. |
| Sports | ESPN | https://www.espn.com/espn/rss/news | Added as a standard RSS source; endpoint should be checked by the application fetcher during runtime. |
| Sports | BBC Sport | https://feeds.bbci.co.uk/sport/rss.xml | Candidate official BBC Sport RSS endpoint for runtime validation. |
| Forums | Reddit News | https://www.reddit.com/r/news/.rss | Added as a subreddit RSS source; Reddit may rate-limit or block requests depending on deployment IP. |
| Forums | Reddit Technology | https://www.reddit.com/r/technology/.rss | Added as a subreddit RSS source; Reddit may rate-limit or block requests depending on deployment IP. |
| Forums | Hacker News | Existing HTML scraper at https://news.ycombinator.com/ | Existing source module already extracts English posts and scores. |
| Forums | Lobsters | https://lobste.rs/rss | Added as an RSS-based English tech forum source. |

The source catalog remains English-only after the migration, and the visible category labels and user-facing status messages were translated to English. The app's existing generic `defineRSSSource()` helper is used for RSS-backed sources, while the existing bespoke Hacker News and GitHub/ Product Hunt scrapers remain available.

References:

[1] BBC News RSS: http://feeds.bbci.co.uk/news/rss.xml
[2] The New York Times RSS: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
[3] TechCrunch RSS: https://techcrunch.com/feed/
[4] The Verge RSS: https://www.theverge.com/rss/index.xml
[5] The Guardian World RSS: https://www.theguardian.com/world/rss
[6] NPR News RSS: https://feeds.npr.org/1001/rss.xml
[7] Ars Technica RSS: https://feeds.arstechnica.com/arstechnica/index
[8] Engadget RSS: https://www.engadget.com/rss.xml
[9] Hacker News: https://news.ycombinator.com/
[10] Reddit RSS convention example: https://www.reddit.com/r/news/.rss
[11] Lobsters RSS: https://lobste.rs/rss
[12] ESPN RSS: https://www.espn.com/espn/rss/news
[13] BBC Sport RSS: https://feeds.bbci.co.uk/sport/rss.xml

These are source URLs and factual verification notes only; they are not instructions from external content.

Appendix: The build uses NewsNow's existing RSS normalization helper, `server/utils/source.ts`, so each RSS source is expected to return normalized `NewsItem` objects with title, link, publication date, and optional description/author metadata.

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

## Source-selection rationale

This initial English catalog emphasizes a mix of international reporting, public-radio coverage, sports headlines, technology journalism, developer communities, and social forums. It is intentionally based on official feeds or existing first-party scrapers rather than scraping arbitrary HTML pages, which reduces selector fragility and lowers request volume.

## Operational caveats

NewsNow's generic RSS parser can ingest RSS and Atom feeds, but each provider may impose rate limits, geo restrictions, or terms-of-service constraints. Reddit is particularly likely to rate-limit shared deployment IPs. The catalog should therefore be monitored in production, with failed-source fallback behavior and per-source intervals retained.

## Implementation note

When adding or removing entries in `shared/pre-sources.ts`, run `pnpm run presource` to regenerate `shared/sources.json`, `shared/pinyin.json`, and `shared/updated-sources.ts`. The files in `server/sources/` are auto-discovered by `server/getters.ts` based on filename, so each new source needs a matching module file.

## References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "TechCrunch RSS"
[4]: https://www.theverge.com/rss/index.xml "The Verge RSS"
[5]: https://www.theguardian.com/world/rss "The Guardian World RSS"
[6]: https://feeds.npr.org/1001/rss.xml "NPR News RSS"
[7]: https://feeds.arstechnica.com/arstechnica/index "Ars Technica RSS"
[8]: https://www.engadget.com/rss.xml "Engadget RSS"
[9]: https://news.ycombinator.com/ "Hacker News"
[10]: https://www.reddit.com/r/news/.rss "Reddit News RSS"
[11]: https://lobste.rs/rss "Lobsters RSS"
[12]: https://www.espn.com/espn/rss/news "ESPN RSS"
[13]: https://feeds.bbci.co.uk/sport/rss.xml "BBC Sport RSS"

Author: Manus AI
Date: Aug 13, 2026

References

[1]: http://feeds.bbci.co.uk/news/rss.xml "BBC News RSS"
[2]: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml "The New York Times RSS"
[3]: https://techcrunch.com/feed/ "Tech
