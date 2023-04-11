import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/layout/Navbar";
import ArticleList from "../components/section/ArticleList";
import ArticlePublisher from "../components/section/ArticlePublisher";
import ArticlesSearch from "../components/section/ArticlesSearch";
import Wrapper from "../components/layout/Wrapper";
import { updateArticles, updatePublisher, loadingData } from "../features/news";
import { useEffect } from "react";
import { getSources, getTopHeadlines } from "../features/api";
import ArticleListSkeleton from "../components/section/ArticleListSkeleton";

const NewsArticles = () => {
  const inputValue = useSelector((state) => state.news.inputValue);
  const loading = useSelector((state) => state.news.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const publishers = await getSources();
      const data = await getTopHeadlines("us");
      dispatch(updateArticles(data));
      dispatch(updatePublisher(publishers));
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
    </div>
  );
};

export default NewsArticles;
