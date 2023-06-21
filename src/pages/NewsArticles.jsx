import { useDispatch, useSelector } from "react-redux";
import ArticleList from "../components/sections/ArticleList";
import ArticlePublisher from "../components/sections/ArticlePublisher";
import ArticlesSearch from "../components/sections/ArticlesSearch";
import { updateArticles, updatePublisher, loadingData } from "../features/news";
import { useEffect } from "react";
import { getSources, getTopHeadlines } from "../features/api";
import ArticleListSkeleton from "../components/sections/ArticleListSkeleton";
import Navbar from "../components/layouts/Navbar";

const NewsArticles = () => {
  const inputValue = useSelector((state) => state.news.inputValue);
  const loading = useSelector((state) => state.news.loading);
  const dispatch = useDispatch();

  async function fetchData() {
    const publishers = await getSources();
    const data = await getTopHeadlines("us");
    dispatch(updateArticles(data));
    dispatch(updatePublisher(publishers));
    dispatch(loadingData(false));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {loading ? (
        <ArticleListSkeleton />
      ) : (
        <>
          <ArticlePublisher />
          {!inputValue ? <ArticleList /> : <ArticlesSearch />}
        </>
      )}
    </div>
  );
};

export default NewsArticles;
