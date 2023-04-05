import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../../features/api";
import { choosePublisher, fetchPublisher } from "../../features/news";

const ArticlePublisher = () => {
  const newsPublisher = useSelector((state) => state.news.publishers);
  const selectedPublisher = useSelector(
    (state) => state.news.selectedPublisher
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const publishers = await getSources();
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
      {newsPublisher?.map((publisher) => (
        <a
          href="#"
          key={publisher}
          className={`underline cursor-pointer hover:text-blue-500 shrink-0`}
          onClick={() => dispatch(choosePublisher(publisher))}
        >
          {publisher}
        </a>
      ))}
    </div>
  );
};

export default ArticlePublisher;
