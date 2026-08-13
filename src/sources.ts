export interface NewsSource {
  id: string
  name: string
  category: 'news' | 'tech' | 'sports' | 'finance' | 'forums'
  feedUrl: string
  siteUrl: string
  icon: string
}

export const ENGLISH_SOURCES: NewsSource[] = [
  // General News
  {
    id: 'bbc_news',
    name: 'BBC News',
    category: 'news',
    feedUrl: 'http://feeds.bbci.co.uk/news/rss.xml',
    siteUrl: 'https://www.bbc.com/news',
    icon: 'https://www.bbc.com/favicon.ico'
  },
  {
    id: 'nyt',
    name: 'The New York Times',
    category: 'news',
    feedUrl: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
    siteUrl: 'https://www.nytimes.com',
    icon: 'https://www.nytimes.com/favicon.ico'
  },
  {
    id: 'guardian',
    name: 'The Guardian',
    category: 'news',
    feedUrl: 'https://www.theguardian.com/world/rss',
    siteUrl: 'https://www.theguardian.com',
    icon: 'https://www.theguardian.com/favicon.ico'
  },
  {
    id: 'npr',
    name: 'NPR News',
    category: 'news',
    feedUrl: 'https://feeds.npr.org/1001/rss.xml',
    siteUrl: 'https://www.npr.org',
    icon: 'https://www.npr.org/favicon.ico'
  },

  // Technology
  {
    id: 'hackernews',
    name: 'Hacker News',
    category: 'tech',
    feedUrl: 'https://news.ycombinator.com/rss',
    siteUrl: 'https://news.ycombinator.com',
    icon: 'https://news.ycombinator.com/favicon.ico'
  },
  {
    id: 'techcrunch',
    name: 'TechCrunch',
    category: 'tech',
    feedUrl: 'https://techcrunch.com/feed/',
    siteUrl: 'https://techcrunch.com',
    icon: 'https://techcrunch.com/favicon.ico'
  },
  {
    id: 'the_verge',
    name: 'The Verge',
    category: 'tech',
    feedUrl: 'https://www.theverge.com/rss/index.xml',
    siteUrl: 'https://www.theverge.com',
    icon: 'https://www.theverge.com/favicon.ico'
  },
  {
    id: 'wired',
    name: 'Wired',
    category: 'tech',
    feedUrl: 'https://www.wired.com/feed/rss',
    siteUrl: 'https://www.wired.com',
    icon: 'https://www.wired.com/favicon.ico'
  },
  {
    id: 'ars_technica',
    name: 'Ars Technica',
    category: 'tech',
    feedUrl: 'https://feeds.arstechnica.com/arstechnica/index',
    siteUrl: 'https://arstechnica.com',
    icon: 'https://arstechnica.com/favicon.ico'
  },

  // Sports
  {
    id: 'espn',
    name: 'ESPN',
    category: 'sports',
    feedUrl: 'https://www.espn.com/espn/rss/news',
    siteUrl: 'https://www.espn.com',
    icon: 'https://www.espn.com/favicon.ico'
  },
  {
    id: 'bbc_sport',
    name: 'BBC Sport',
    category: 'sports',
    feedUrl: 'http://feeds.bbci.co.uk/sport/rss.xml',
    siteUrl: 'https://www.bbc.com/sport',
    icon: 'https://www.bbc.com/favicon.ico'
  },

  // Forums & Discussions
  {
    id: 'reddit_news',
    name: 'Reddit /r/news',
    category: 'forums',
    feedUrl: 'https://www.reddit.com/r/news/.rss',
    siteUrl: 'https://www.reddit.com/r/news',
    icon: 'https://www.redditstatic.com/shreddit/assets/favicon/192x192.png'
  },
  {
    id: 'reddit_tech',
    name: 'Reddit /r/technology',
    category: 'forums',
    feedUrl: 'https://www.reddit.com/r/technology/.rss',
    siteUrl: 'https://www.reddit.com/r/technology',
    icon: 'https://www.redditstatic.com/shreddit/assets/favicon/192x192.png'
  }
]
