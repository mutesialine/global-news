import React from "react";
import NewsCard from "../ui/NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { searchCategory } from "../../features/news";
import { useEffect } from "react";

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
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=everything&apiKey=2a4f6ac999f3498aa110ce6580a412b0"
      );
      const data = await response.json();
      dispatch(searchCategory(data));
    }
    fetchData();
  }, [inputValue]);
  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-8 py-8 px-16 bg-gray-100">
      {filterAllArticles?.map((article, index) => (
        <NewsCard {...article} key={index} />
      ))}
    </div>
  );
};
export default ArticlesSearch;
