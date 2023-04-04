import { useEffect } from "react";
import NewsCard from "../ui/NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../features/news";
const ArticleList = () => {
  const newsArticle = useSelector((state) => state.news.articles);
  const selectedPublisher = useSelector(
    (state) => state.news.selectedPublisher
  );
  const searchArticles = useSelector((state) => state.news.search);

  const filterAllArticles = newsArticle.articles?.filter(
    (article) =>
      article.title.toLowerCase().includes(searchArticles.toLowerCase()) ||
      article.description.toLowerCase().includes(searchArticles.toLowerCase())
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const url = selectedPublisher
        ? `https://newsapi.org/v2/everything?q=${selectedPublisher}&apiKey=ad59556824cf4437bfdff368fdd63f79`
        : "https://newsapi.org/v2/top-headlines?country=us&apiKey=ad59556824cf4437bfdff368fdd63f79";
      const response = await fetch(url);
      const data = await response.json();
      dispatch(fetchArticles(data));
    }
    fetchData();
  }, [selectedPublisher]);
  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-8 py-8 px-16 bg-gray-100">
      {!searchArticles
        ? newsArticle.articles
            ?.slice(0, 10)
            .map((article, index) => <NewsCard {...article} key={index} />)
        : filterAllArticles?.map((article, index) => (
            <NewsCard {...article} key={index} />
          ))}
    </div>
  );
};

export default ArticleList;
