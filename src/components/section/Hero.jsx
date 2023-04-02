import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../features/news";
import NewsCard from "../ui/NewsCard";
const Hero = () => {
  const newsArticle = useSelector((state) => state.news.value);
  const [selectedPublisher, setSelectedPublisher] = useState(null);
  const handlePublisherClick = (publisher) => {
    setSelectedPublisher(publisher);
  };
  const resetFilters = () => {
    setSelectedPublisher(null);
  };

  const articlesToDisplay = selectedPublisher
    ? newsArticle.articles?.filter(
        (article) => article.source.name === selectedPublisher
      )
    : newsArticle.articles;

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d31be5f33f34336bd35d693b1f0e8fa&pagesize=10"
      );
      const data = await response.json();
      dispatch(fetchArticles(data));
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-black flex justify-center items-center text-white text-xl font bold px-8 gap-x-4">
        <p
          className="underline cursor-pointer hover:text-blue-500"
          onClick={resetFilters}
        >
          All
        </p>
        {newsArticle.articles?.map((article) => (
          <a
            href="#"
            key={article.id}
            className="underline cursor-pointer hover:text-blue-500"
            onClick={() => handlePublisherClick(article.source.name)}
          >
            {article.source.name}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 py-8 px-16 bg-gray-100">
        {articlesToDisplay?.map((articles) => (
          <NewsCard {...articles} key={articles.id} />
        ))}
      </div>
    </>
  );
};

export default Hero;
