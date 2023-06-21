import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchCategory, loadingData } from "../../features/news";
import NewsCard from "../ui/NewsCard";
import { getEverything } from "../../features/api";

const ArticlesSearch = () => {
  const { searchArticles, inputValue } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  async function fetchData() {
    const data = await getEverything(inputValue);
    dispatch(searchCategory(data.articles));
    dispatch(loadingData(false));
  }

  useEffect(() => {
    fetchData(inputValue, dispatch);
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
