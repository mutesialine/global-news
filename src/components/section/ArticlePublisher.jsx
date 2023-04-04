import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublisher } from "../../features/news";
import ArticleList from "./ArticleList";
import NewsSearch from "./NewsSearch";

const ArticlePublisher = () => {
  const dispatch = useDispatch();
  const newsArticle = useSelector((state) => state.news.publishers);
  const [isSelectedPublisher, setSelectedPublisher] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=ad59556824cf4437bfdff368fdd63f79"
      );
      const data = await response.json();
      const publishers = data.sources.map((source) => source.name);
      dispatch(fetchPublisher(publishers));
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-black flex gap-x-8 items-center text-white font bold px-4 py-2 overflow-x-auto">
        <p
          className="underline cursor-pointer hover:text-blue-500"
          onClick={() => setSelectedPublisher(null)}
        >
          All
        </p>
        {newsArticle?.map((publisher) => (
          <a
            href="#"
            key={publisher}
            className="underline cursor-pointer hover:text-blue-500 shrink-0"
            onClick={() => setSelectedPublisher(publisher)}
          >
            {publisher}
          </a>
        ))}
      </div>
      <ArticleList selectedPublisher={isSelectedPublisher} />
    </>
  );
};

export default ArticlePublisher;
