import { useEffect } from "react";
import NewsCard from "../ui/NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles, clickedPublisher } from "../../features/news";
const TopNewArticles = () => {
  const newsArticle = useSelector((state) => state.news.articles);
  const selectedPublisher = useSelector((state) => state.news.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      let response;
      selectedPublisher &&
        (response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=${selectedPublisher}&apiKey=9d31be5f33f34336bd35d693b1f0e8fa`
        ));
      // } else {
      //   response = await fetch(
      //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d31be5f33f34336bd35d693b1f0e8fa&pagesize=10"
      //   );
      // }
      const data = await response.json();
      dispatch(fetchArticles(data));
    }
    fetchData();
  }, []);

  // const articlesToDisplay = selectedPublisher
  //   ? newsArticle.filter((article) => article.source.id === selectedPublisher)
  //   : newsArticle.articles;

  console.log(selectedPublisher);
  return (
    <div className="grid grid-cols-3 gap-4 py-8 px-16 bg-gray-100">
      {newsArticle.articles?.map((article, index) => (
        <NewsCard {...article} key={index} />
      ))}
    </div>
  );
};

export default TopNewArticles;
