import { useDispatch, useSelector } from "react-redux";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ArticleList from "./ArticleList";
import ArticlePublisher from "./ArticlePublisher";
import ArticlesSearch from "./ArticlesSearch";
import Wrapper from "../layout/Wrapper";
import {
  fetchArticles,
  fetchPublisher,
  loadingData,
} from "../../features/news";
import { useEffect } from "react";
import { getSources, getTopHeadlines } from "../../features/api";
import ArticleListSkeleton from "./ArticleListSkeleton";

const NewsArticles = () => {
  const inputValue = useSelector((state) => state.news.inputValue);
  const loading = useSelector((state) => state.news.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const publishers = await getSources();
      const data = await getTopHeadlines("us");
      dispatch(fetchArticles(data));
      dispatch(fetchPublisher(publishers));
      dispatch(loadingData(false));
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  flex flex-col">
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
