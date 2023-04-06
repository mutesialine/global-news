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
    <div className="flex flex-col md:grid grid-cols-3 gap-8 py-8 px-16">
      {newsArticle.articles?.slice(0, 10).map((article, index) => (
        <NewsCard {...article} key={index} styles="last-of-type:col-span-2" />
      ))}
    </div>
  );
};

export default ArticleList;
