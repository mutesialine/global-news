import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchCategory, loadingData } from "../../features/news";
import NewsCard from "../ui/NewsCard";
import { getEverything } from "../../features/api";
import { Link } from "react-router-dom";
const ArticlesSearch = () => {
  const searchArticles = useSelector((state) => state.news.search);
  const newsArticles = useSelector((state) => state.news.articles);
  const inputValue = useSelector((state) => state.news.inputValue);
  const dispatch = useDispatch();

  const filterAllArticles = [
    ...(searchArticles?.articles || []),
    ...(newsArticles?.articles || []),
  ]?.filter(
    (article) =>
      article.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      article.source.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  useEffect(() => {
    async function fetchData() {
      const data = await getEverything();
      dispatch(searchCategory(data));
      dispatch(loadingData(false));
    }
    fetchData();
  }, [inputValue]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10">
      {filterAllArticles?.map((article, index) => (
        <Link to={"/full"} state={article} key={index}>
          <NewsCard {...article} />
        </Link>
      ))}
    </div>
  );
};
export default ArticlesSearch;
