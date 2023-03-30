import NewsCard from "../ui/NewsCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/news";
function News() {
  const newsArticle = useSelector((state) => state.news.value);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d31be5f33f34336bd35d693b1f0e8fa&pagesize=6"
      );
      const data = await response.json();
      console.log(data, "aldo error");
      dispatch(fetchArticles(data));
      setLoading(true);
    }
    fetchData();
  }, []);

  return (
    isLoading && (
      <div className="grid grid-cols-3 gap-4 py-8 px-16 bg-gray-100">
        {newsArticle.articles?.map((article) => (
          <NewsCard {...article} key={article.id} />
        ))}
      </div>
    )
  );
}

export default News;
