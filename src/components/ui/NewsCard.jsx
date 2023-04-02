const NewsCard = ({
  styles,
  urlToImage,
  publishedAt,
  description,
  author,
  title,
  name,
}) => {
  return (
    <div className={`${styles} space-y-2 relative text-black `}>
      <img src={urlToImage} alt="image" className="object-cover w-full" />
      <div className="px-2 py-2 bottom-2">
        <p className="text-sm gap-x-2 italic pt-2 font-bold">{title}</p>
        {/* <p className="text-sm leading-5 font-bold">{description}</p> */}
        <div className="flex text-sm gap-x-2 italic pt-2">
          <span>{name}</span>
          <span>{author}</span>
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
