import { useSelector } from "react-redux";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ArticleList from "./ArticleList";
import ArticlePublisher from "./ArticlePublisher";
import ArticlesSearch from "./ArticlesSearch";
import Wrapper from "../layout/Wrapper";

const NewsArticles = () => {
  const inputValue = useSelector((state) => state.news.inputValue);
  return (
    <>
      <Navbar />
      <Wrapper>
        <ArticlePublisher />
        {!inputValue ? <ArticleList /> : <ArticlesSearch />}
      </Wrapper>

      <Footer />
    </>
  );
};

export default NewsArticles;
