import { useSelector } from "react-redux";
import NewsCard from "../ui/NewsCard";

const ArticleList = () => {
  const newsArticle = useSelector((state) => state.news.articles);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10">
      {newsArticle.articles?.slice(0, 12).map((article, index) => (
        <NewsCard {...article} key={index} />
      ))}
    </div>
  );
};

export default ArticleList;
