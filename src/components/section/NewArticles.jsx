import { useEffect } from "react";
import NewsCard from "../ui/NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../features/news";
const NewArticles = ({ selectedPublisher }) => {
  const newsArticle = useSelector((state) => state.news.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const url = selectedPublisher
        ? `https://newsapi.org/v2/everything?q=${selectedPublisher}&apiKey=9d31be5f33f34336bd35d693b1f0e8fa&pageSize=10`
        : "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d31be5f33f34336bd35d693b1f0e8fa&pagesize=9";
      const response = await fetch(url);
      const data = await response.json();
      dispatch(fetchArticles(data));
    }
    fetchData();
  }, [selectedPublisher]);
  return (
    <div className="grid grid-cols-3 gap-4 py-8 px-16 bg-gray-100">
      {newsArticle.articles?.map((article, index) => (
        <NewsCard {...article} key={index} />
      ))}
    </div>
  );
};

export default NewArticles;
