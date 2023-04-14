import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewsCard from "../ui/NewsCard";

const ArticleList = () => {
  const newsArticle = useSelector((state) => state.news.articles);
  const localLoading = useSelector((state) => state.news.localLoading);
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10 ${
        localLoading ? "opacity-30" : ""
      }`}
    >
      {newsArticle.articles?.map((article, index) => (
        <Link to={"/full"} state={article} key={index}>
          <NewsCard {...article} />
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
