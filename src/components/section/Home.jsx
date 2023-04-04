import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublisher } from "../../features/news";
import NewArticles from "./NewArticles";

const Home = () => {
  const dispatch = useDispatch();
  const newsArticle = useSelector((state) => state.news.publishers);
  const [selectedPublisher, setSelectedPublisher] = useState(null);

  const handlePublisherClick = (publisher) => {
    setSelectedPublisher(publisher);
  };
  const handleFilter = () => {
    setSelectedPublisher(null);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=9d31be5f33f34336bd35d693b1f0e8fa"
      );
      const data = await response.json();
      const publishers = data.sources.map((source) => source.id);
      dispatch(fetchPublisher(publishers));
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-black flex gap-x-8 items-center text-white text-xl font bold px-4 py-2 overflow-x-auto">
        <p
          className="underline cursor-pointer hover:text-blue-500"
          onClick={handleFilter}
        >
          All
        </p>
        {newsArticle?.map((publisher) => (
          <a
            href="#"
            key={publisher}
            className="underline cursor-pointer hover:text-blue-500"
            onClick={() => handlePublisherClick(publisher)}
          >
            {publisher}
          </a>
        ))}
      </div>
      <NewArticles selectedPublisher={selectedPublisher} />
    </>
  );
};

export default Home;
