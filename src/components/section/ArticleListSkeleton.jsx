import NewsCardSkeleton from "../ui/NewsCardSkeleton";

const ArticleListSkeleton = () => {
  const numCards = 6;
  const newsCards = [];

  for (let i = 0; i < numCards; i++) {
    newsCards.push(<NewsCardSkeleton />);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10">
      {newsCards.map((card, index) => (
        <NewsCardSkeleton {...card} key={index} />
      ))}
    </div>
  );
};

export default ArticleListSkeleton;
