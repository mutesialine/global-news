import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../ui/NewsCard";
import { searchCategory } from "../../features/news";
const NewsSearch = () => {
  const newsArticle = useSelector((state) => state.news.articles);
  const inputValue = useSelector((state) => state.news.inputValue);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${inputValue}&apiKey=ad59556824cf4437bfdff368fdd63f79&pageSize=10`
      );
      const data = await response.json();
      dispatch(searchCategory(data));
    }
    fetchData();
  }, [inputValue]);
  return (
    <div className="grid grid-cols-3 gap-8 py-8 px-16 bg-gray-100">
      {newsArticle.articles?.map((article, index) => (
        <NewsCard {...article} key={index} />
      ))}
    </div>
  );
};
export default NewsSearch;
