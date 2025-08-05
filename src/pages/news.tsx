import React from 'react'
import Layout from '@theme/Layout'
import TechNews from '../components/HomepageFeatures/techNews'

export default function NewsPage() {
  return (
    <Layout title="Tech News" description="Latest Technology News in India">
      <main className="container margin-vert--lg">
        <h1 className="text--center">Latest Tech News</h1>
        <div className="margin-top--md">
          <TechNews />
        </div>
      </main>
    </Layout>
  )
}

