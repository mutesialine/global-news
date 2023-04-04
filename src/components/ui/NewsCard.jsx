const NewsCard = ({
  styles,
  urlToImage,
  publishedAt,
  description,
  author,
  title,
  url,
}) => {
  return (
    <div
      className={`${styles} space-y-2 relative text-black flex flex-col item-center`}
    >
      <img src={urlToImage} alt="image" className="object-cover md:h-[200px]" />
      <div className="px-2 py-2 bottom-2">
        <a
          href={url}
          className="text-sm gap-x-2 italic pt-2 font-bold hover:text-blue-600 hover:underline"
        >
          {title}
        </a>
        <p className="text-sm leading-5">{description}</p>
        <div className="flex gap-x-2  text-sm  italic pt-2">
          <p>{author}</p>
          <p>{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
