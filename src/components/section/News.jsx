import React from 'react'
import NewsCard from '../ui/NewsCard'

function News() {
  return (
    <div className="grid grid-cols-3 gap-4 py-8 px-16 bg-gray-100">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default News
