export interface Root {
  status: string
  totalResults: number
  results: Result[]
  nextPage: string
}

export interface Result {
  article_id: string
  title: string
  link: string
  keywords: string[]
  creator: string[]
  description: string
  content: string
  pubDate: string
  pubDateTZ: string
  image_url: string
  video_url: string
  source_id: string
  source_name: string
  source_priority: number
  source_url: string
  source_icon: string
  language: string
  country: string[]
  category: string[]
  sentiment: string
  sentiment_stats: string
  ai_tag: string
  ai_region: string
  ai_org: string
  ai_summary: string
  ai_content: string
  duplicate: boolean
}

// export type IQuery = 'Health' | 'technology' | 'edjucation'