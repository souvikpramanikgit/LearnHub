import React, { useEffect, useState } from 'react'

type Article = {
  title: string
  url: string
  description: string
  image: string
  source: { name: string }
}

const API_KEY = '663e01d437f09c8811b245a7e133c6ac'

export default function TechNews() {
  const [news, setNews] = useState<Article[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://gnews.io/api/v4/top-headlines?lang=en&topic=technology&token=${API_KEY}`
        )
        const data = await res.json()
        if (data.articles) {
          setNews(data.articles)
        } else {
          setError('Failed to load news.')
        }
      } catch (err) {
        setError('Something went wrong.')
      }
    }

    fetchNews()
  }, [])

  if (error) return <div>{error}</div>

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Latest Tech News</h2>
      {news.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        news.slice(0, 5).map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border p-4 rounded hover:bg-gray-100 transition"
          >
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.description}</p>
            <p className="text-xs text-gray-500 mt-1">Source: {article.source.name}</p>
          </a>
        ))
      )}
    </div>
  )
}
