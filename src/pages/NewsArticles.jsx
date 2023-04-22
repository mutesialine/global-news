import { useDispatch, useSelector } from "react-redux";
import ArticleList from "../components/section/ArticleList";
import ArticlePublisher from "../components/section/ArticlePublisher";
import ArticlesSearch from "../components/section/ArticlesSearch";
import Wrapper from "../components/layouts/Wrapper";
import { updateArticles, updatePublisher, loadingData } from "../features/news";
import { useEffect } from "react";
import { getSources, getTopHeadlines } from "../features/api";
import ArticleListSkeleton from "../components/section/ArticleListSkeleton";
import Footer from "../components/layouts/Footer";
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
      <Wrapper>
        {loading ? (
          <ArticleListSkeleton />
        ) : (
          <>
            <ArticlePublisher />
            {!inputValue ? <ArticleList /> : <ArticlesSearch />}
          </>
        )}
      </Wrapper>
      <Footer />
    </div>
  );
};

export default NewsArticles;
