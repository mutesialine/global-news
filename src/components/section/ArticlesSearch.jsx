import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchCategory, loadingData } from "../../features/news";
import NewsCard from "../ui/NewsCard";
import { getEverything } from "../../features/api";
import { Link } from "react-router-dom";

const ArticlesSearch = () => {
  const searchArticles = useSelector((state) => state.news.search);
  const inputValue = useSelector((state) => state.news.inputValue);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await getEverything(inputValue);
      dispatch(searchCategory(data.articles));
      dispatch(loadingData(false));
    }
    fetchData();
  }, [inputValue]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10">
      {searchArticles?.length > 0 ? (
        searchArticles?.map((article, index) => (
          <Link to={"/full"} state={article} key={`article-index-${index}`}>
            <NewsCard {...article} />
          </Link>
        ))
      ) : (
        <p className="text-lg">no results data found for " {inputValue} "</p>
      )}
    </div>
  );
};
export default ArticlesSearch;
