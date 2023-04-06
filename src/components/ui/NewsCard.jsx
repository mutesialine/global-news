const NewsCard = ({
  styles,
  urlToImage,
  publishedAt,
  author,
  title,
  url,
  source,
}) => {
  const time = new Date(publishedAt);
  return (
    <div
      className={`${styles} space-y-2 relative text-black flex flex-col item-center`}
    >
      <img src={urlToImage} alt="image" className="object-cover" />
      <div className="px-2 py-2 bottom-2">
        <p className="text-red-500">{source.name}</p>
        <a
          href={url}
          className="text-sm gap-x-2 italic pt-2 font-bold hover:text-blue-600 hover:underline"
        >
          {title}
        </a>
        <div className="flex gap-x-2  text-sm  italic pt-2">
          <p>{author}</p>
          <p>
            {time.getHours()}H - {time.getDay()}D - {time.getMonth()}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
