import { useEffect } from "react";
import NewsCard from "../ui/NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../features/news";
import { getTopHeadlines } from "../../features/api";
const ArticleList = () => {
  const newsArticle = useSelector((state) => state.news.articles);
  const selectedPublisher = useSelector(
    (state) => state.news.selectedPublisher
  );

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await getTopHeadlines("us", selectedPublisher);
      dispatch(fetchArticles(data));
    }
    fetchData();
  }, [selectedPublisher]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16">
      {newsArticle.articles?.slice(0, 12).map((article, index) => (
        <NewsCard {...article} key={index} />
      ))}
    </div>
  );
};

export default ArticleList;
