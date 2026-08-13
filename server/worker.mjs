import { ENGLISH_SOURCES } from '../src/sources.js'

let memoryArticles = [
  {
    id: 'demo-1',
    sourceId: 'bbc_news',
    sourceName: 'BBC News',
    category: 'news',
    title: 'Global Leaders Gather for Annual Economic and Climate Summit',
    url: 'https://www.bbc.com/news',
    publishedAt: new Date().toISOString(),
    snippet: 'Delegates from over 100 countries convene to discuss sustainable energy frameworks and global economic cooperation.',
    icon: 'https://www.bbc.com/favicon.ico'
  },
  {
    id: 'demo-2',
    sourceId: 'techcrunch',
    sourceName: 'TechCrunch',
    category: 'tech',
    title: 'Breakthrough in Quantum Computing Achieved by International Research Team',
    url: 'https://techcrunch.com',
    publishedAt: new Date(Date.now() - 1800000).toISOString(),
    snippet: 'New error-correction technique brings stable quantum processors closer to commercial viability than ever before.',
    icon: 'https://techcrunch.com/favicon.ico'
  },
  {
    id: 'demo-3',
    sourceId: 'espn',
    sourceName: 'ESPN',
    category: 'sports',
    title: 'Championship Finals Set After Historic Overtime Thriller',
    url: 'https://www.espn.com',
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    snippet: 'An unforgettable performance in the final seconds secures a dramatic victory and advances the underdogs to the title match.',
    icon: 'https://www.espn.com/favicon.ico'
  }
]

let memorySourceHealth = {
  bbc_news: { status: 'ok', lastChecked: new Date().toISOString(), count: 12 },
  techcrunch: { status: 'ok', lastChecked: new Date().toISOString(), count: 10 },
  espn: { status: 'ok', lastChecked: new Date().toISOString(), count: 8 }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname
    const method = request.method

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    }

    if (method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    if (path === '/api/sources') {
      return new Response(JSON.stringify({ sources: ENGLISH_SOURCES, health: memorySourceHealth }), { headers: corsHeaders })
    }

    if (path === '/api/articles') {
      const category = url.searchParams.get('category')
      const sourceId = url.searchParams.get('source')
      const search = url.searchParams.get('search')?.toLowerCase()

      let items = memoryArticles

      if (category && category !== 'all') {
        const matchingSourceIds = ENGLISH_SOURCES.filter(s => s.category === category).map(s => s.id)
        items = items.filter(i => matchingSourceIds.includes(i.sourceId))
      }

      if (sourceId && sourceId !== 'all') {
        items = items.filter(i => i.sourceId === sourceId)
      }

      if (search) {
        items = items.filter(i => i.title.toLowerCase().includes(search) || (i.snippet && i.snippet.toLowerCase().includes(search)))
      }

      return new Response(JSON.stringify({ articles: items, total: items.length, updatedAt: new Date().toISOString() }), { headers: corsHeaders })
    }

    if (path === '/api/refresh' && method === 'POST') {
      const refreshedArticles = []
      
      for (const source of ENGLISH_SOURCES) {
        try {
          const res = await fetch(source.feedUrl, { headers: { 'User-Agent': 'NewsNow-Aggregator/1.0' } })
          if (!res.ok) continue
          const text = await res.text()
          
          const itemRegex = /<item>([\s\S]*?)<\/item>|<entry>([\s\S]*?)<\/entry>/g
          let match
          let count = 0
          while ((match = itemRegex.exec(text)) !== null && count < 15) {
            const raw = match[1] || match[2]
            const titleMatch = raw.match(/<title>([\s\S]*?)<\/title>/)
            const linkMatch = raw.match(/<link[^>]*>([\s\S]*?)<\/link>|<link[^>]*href="([^"]*)"/)
            const dateMatch = raw.match(/<pubDate>([\s\S]*?)<\/pubDate>|<updated>([\s\S]*?)<\/updated>/)
            const descMatch = raw.match(/<description>([\s\S]*?)<\/description>|<summary>([\s\S]*?)<\/summary>/)

            const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim() : 'Untitled'
            const link = linkMatch ? (linkMatch[1] || linkMatch[2] || '').trim() : source.siteUrl
            const pubDate = dateMatch ? dateMatch[1] || dateMatch[2] : new Date().toISOString()
            const snippet = descMatch ? descMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<[^>]*>/g, '').slice(0, 160).trim() : ''

            refreshedArticles.push({
              id: `${source.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
              sourceId: source.id,
              sourceName: source.name,
              category: source.category,
              title,
              url: link,
              publishedAt: pubDate,
              snippet,
              icon: source.icon
            })
            count++
          }

          memorySourceHealth[source.id] = { status: 'ok', lastChecked: new Date().toISOString(), count }
        } catch (err) {
          memorySourceHealth[source.id] = { status: 'error', lastChecked: new Date().toISOString(), count: 0 }
        }
      }

      if (refreshedArticles.length > 0) {
        const map = new Map()
        memoryArticles.forEach(a => map.set(a.url, a))
        refreshedArticles.forEach(a => map.set(a.url, a))
        memoryArticles = Array.from(map.values()).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      }

      return new Response(JSON.stringify({ success: true, count: refreshedArticles.length, totalCached: memoryArticles.length, health: memorySourceHealth }), { headers: corsHeaders })
    }

    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: corsHeaders })
  }
}
