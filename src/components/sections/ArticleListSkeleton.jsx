import NewsCardSkeleton from "../ui/NewsCardSkeleton";

const ArticleListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10">
      {Array(6)
        .fill(<NewsCardSkeleton />)
        .map((card, index) => (
          <div key={index}>{card}</div>
        ))}
    </div>
  );
};

export default ArticleListSkeleton;
