import process from "node:process"
import { Interval } from "./consts"
import { typeSafeObjectFromEntries } from "./type.util"
import type { OriginSource, Source, SourceID } from "./types"

const Time = {
  Test: 1,
  Realtime: 2 * 60 * 1000,
  Fast: 5 * 60 * 1000,
  Default: Interval, // 10min
  Common: 30 * 60 * 1000,
  Slow: 60 * 60 * 1000,
}

export const originSources = {
  "bbc_news": {
    name: "BBC News",
    column: "world",
    type: "hottest",
    color: "red",
    home: "https://www.bbc.com/news",
  },
  "nyt": {
    name: "NY Times",
    column: "world",
    type: "hottest",
    color: "gray",
    home: "https://www.nytimes.com",
  },
  "techcrunch": {
    name: "TechCrunch",
    column: "tech",
    type: "hottest",
    color: "green",
    home: "https://techcrunch.com",
  },
  "the_verge": {
    name: "The Verge",
    column: "tech",
    type: "hottest",
    color: "pink",
    home: "https://www.theverge.com",
  },
  "wired": {
    name: "Wired",
    column: "tech",
    type: "hottest",
    color: "slate",
    home: "https://www.wired.com",
  },
  "ars": {
    name: "Ars Technica",
    column: "tech",
    type: "hottest",
    color: "indigo",
    home: "https://arstechnica.com",
  },
  "engadget": {
    name: "Engadget",
    column: "tech",
    type: "hottest",
    color: "emerald",
    home: "https://www.engadget.com",
  },
  "espn": {
    name: "ESPN",
    column: "sports",
    type: "hottest",
    color: "red",
    home: "https://www.espn.com",
  },
  "bbc_sport": {
    name: "BBC Sport",
    column: "sports",
    type: "hottest",
    color: "blue",
    home: "https://www.bbc.com/sport",
  },
  "guardian": {
    name: "The Guardian",
    column: "world",
    type: "hottest",
    color: "blue",
    home: "https://www.theguardian.com/world",
  },
  "npr": {
    name: "NPR News",
    column: "world",
    type: "hottest",
    color: "purple",
    home: "https://www.npr.org/sections/news/",
  },
  "reddit_news": {
    name: "Reddit News",
    column: "world",
    type: "hottest",
    color: "orange",
    home: "https://www.reddit.com/r/news/",
  },
  "reddit_tech": {
    name: "Reddit Tech",
    column: "tech",
    type: "hottest",
    color: "orange",
    home: "https://www.reddit.com/r/technology/",
  },
  "lobsters": {
    name: "Lobsters",
    column: "tech",
    type: "hottest",
    color: "red",
    home: "https://lobste.rs",
  },
  "hackernews": {
    name: "Hacker News",
    color: "orange",
    column: "tech",
    type: "hottest",
    home: "https://news.ycombinator.com/",
  },
  "producthunt": {
    name: "Product Hunt",
    color: "red",
    column: "tech",
    type: "hottest",
    home: "https://www.producthunt.com/",
  },
  "github": {
    name: "Github",
    color: "gray",
    home: "https://github.com/",
    column: "tech",
    sub: {
      "trending-today": {
        title: "Today",
        type: "hottest",
      },
    },
  },
} as const satisfies Record<string, OriginSource>

export function genSources() {
  const sources: Record<string, Source> = {}
  for (const [id, origin] of Object.entries(originSources)) {
    const { sub, ...rest } = origin as OriginSource
    const common = {
      interval: Time.Default,
      color: "blue",
      ...rest,
    }
    if (sub) {
      const subEntries = Object.entries(sub)
      sources[id] = {
        ...common,
        redirect: `${id}-${subEntries[0][0]}`,
      } as Source
      for (const [subId, subOrigin] of subEntries) {
        sources[`${id}-${subId}`] = {
          ...common,
          ...subOrigin,
        } as Source
      }
    } else {
      sources[id] = common as Source
    }
  }

  const CF_PAGES = process.env.CF_PAGES === "1"
  return typeSafeObjectFromEntries(
    Object.entries(sources).filter(([_, v]) => {
      if (v.disable === true) return false
      if (CF_PAGES && v.disable === "cf") return false
      return true
    }),
  ) as Record<SourceID, Source>
}
