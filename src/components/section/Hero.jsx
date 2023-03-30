import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../features/news";
import NewsCard from "../ui/NewsCard";
const Hero = () => {
  const newsArticle = useSelector((state) => state.news.value);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d31be5f33f34336bd35d693b1f0e8fa&pagesize=10"
      );
      const data = await response.json();
      dispatch(fetchArticles(data));
      setLoading(true);
    }
    fetchData();
  }, []);
  return (
    <div className="bg-black flex justify-center items-center text-white text-xl font bold px-8 gap-x-4">
      {newsArticle.articles?.map((article) => (
        <a
          href="#"
          key={article.id}
          className="underline cursor-pointer hover:text-blue-500"
        >
          {article.source.name}
        </a>
      ))}
    </div>
  );
};

export default Hero;
