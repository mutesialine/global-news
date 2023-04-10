const NewsCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-md overflow-hidden shadow-md">
      <div className="h-56 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 mb-2"></div>
        <div className="h-4 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
