import moment from "moment";
const NewsCard = ({ styles, urlToImage, publishedAt, title, url, source }) => {
  const formattedTime = moment(publishedAt).format("MMM Do YYYY, h:mm:ss a");

  return (
    <div
      className={`${styles} space-y-2 relative text-black flex flex-col item-center`}
    >
      <img src={urlToImage} alt="image" className="object-cover h-[200px]" />
      <div className="px-2 py-2 bottom-2">
        <p className="text-red-500">{source.name}</p>
        <a
          href={url}
          className="text-sm gap-x-2 italic pt-2 font-bold hover:text-blue-600 hover:underline"
        >
          {title}
        </a>
        <div className="flex gap-x-2  text-sm  italic pt-2">
          <p>{formattedTime}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
