import NewsCard from "../ui/NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { searchCategory } from "../../features/news";
import { useEffect } from "react";
import { getEverything } from "../../features/api";
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
    }
    fetchData();
  }, [inputValue]);

  console.log(inputValue);
  console.log(searchArticles);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16">
      {filterAllArticles?.map((article, index) => (
        <NewsCard {...article} key={index} />
      ))}
    </div>
  );
};
export default ArticlesSearch;
