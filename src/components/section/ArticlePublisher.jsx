import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../../features/api";
import { choosePublisher, fetchPublisher } from "../../features/news";
import {
  AiOutlineLeftCircle,
  AiOutlineRight,
  AiOutlineRightCircle,
  AiOutlineSearch,
} from "react-icons/ai";

const ArticlePublisher = () => {
  const dispatch = useDispatch();
  const newsPublisher = useSelector((state) => state.news.publishers);
  const selectedPublisher = useSelector(
    (state) => state.news.selectedPublisher
  );
  const refInput = useRef(null);
  const handleScroll = (scrollOffset) => {
    const inputElement = refInput.current;
    if (inputElement) {
      inputElement.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    async function fetchData() {
      const publishers = await getSources();
      dispatch(fetchPublisher(publishers));
    }
    fetchData();
  }, []);
  return (
    <div className="flex gap-x-6 items-center px-8 py-2 text-white bg-black">
      <div onClick={() => handleScroll(-300)}>
        <AiOutlineLeftCircle size={25} />
      </div>

      <div ref={refInput} className="flex gap-x-8 overflow-hidden">
        <p
          className={`underline cursor-pointer hover:text-blue-50`}
          onClick={() => dispatch(choosePublisher(null))}
        >
          All
        </p>
        {newsPublisher?.map((publisher) => (
          <p
            key={publisher}
            className={`underline cursor-pointer font-bold hover:text-blue-700 shrink-0 ${
              selectedPublisher === publisher ? "text-blue-700" : ""
            }`}
            onClick={() => dispatch(choosePublisher(publisher))}
          >
            {publisher}
          </p>
        ))}
      </div>
      <div onClick={() => handleScroll(300)}>
        <AiOutlineRightCircle size={24} />
      </div>
    </div>
  );
};

export default ArticlePublisher;
