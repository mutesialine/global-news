import NewsCard from "../ui/NewsCard";
import { useEffect, useState } from "react";
function News() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d31be5f33f34336bd35d693b1f0e8fa&pagesize=6"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 py-8 px-16 bg-gray-100">
      {articles.map((article) => (
        <NewsCard {...article} key={article.id} />
      ))}
    </div>
  );
}

export default News;
