import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { choosePublisher, fetchPublisher } from "../../features/news";

const ArticlePublisher = () => {
  const newsArticle = useSelector((state) => state.news.publishers);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=2a4f6ac999f3498aa110ce6580a412b0"
      );
      const data = await response.json();
      const publishers = data.sources.map((source) => source.id);
      dispatch(fetchPublisher(publishers));
    }
    fetchData();
  }, []);
  return (
    <div className="bg-black flex gap-x-8 items-center text-white px-4 py-2 overflow-x-auto ">
      <p
        className="underline cursor-pointer hover:text-blue-500"
        onClick={() => dispatch(choosePublisher(null))}
      >
        All
      </p>
      {newsArticle?.map((publisher) => (
        <a
          href="#"
          key={publisher}
          className="underline cursor-pointer hover:text-blue-500 shrink-0"
          onClick={() => dispatch(choosePublisher(publisher))}
        >
          {publisher}
        </a>
      ))}
    </div>
  );
};

export default ArticlePublisher;
