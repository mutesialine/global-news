import moment from "moment";
const NewsCard = ({ urlToImage, publishedAt, title, source }) => {
  const formattedTime = moment(publishedAt).format("MMM Do YYYY, h:mm:ss a");

  return (
    <div className="space-y-2 relative text-black flex flex-col item-center group hover:opacity-80 cursor-pointer">
      <img
        src={urlToImage}
        alt="image"
        className="object-cover h-[200px] group-hover:scale-105"
      />
      <div className="px-2 py-2 bottom-2">
        <p className="text-sm gap-x-2 italic pt-2 font-bold">{title}</p>
        <div className="flex gap-x-2  text-sm  italic pt-2">
          <p className="text-red-500">{formattedTime}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
