import { Suspense } from "react";
import { useSelector } from "react-redux";
import Footer from "../Layout/Footer";
import Navbar from "../layout/Navbar";
import ArticleList from "./ArticleList";
import ArticlePublisher from "./ArticlePublisher";
import ArticlesSearch from "./ArticlesSearch";

const NewsArticles = () => {
  const inputValue = useSelector((state) => state.news.inputValue);
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navbar />
      <ArticlePublisher />
      <Suspense fallback={<p>loading..</p>}>
        {!inputValue ? <ArticleList /> : <ArticlesSearch />}
      </Suspense>

      <Footer />
    </div>
  );
};

export default NewsArticles;
