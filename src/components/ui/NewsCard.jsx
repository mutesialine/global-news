import moment from "moment";
const NewsCard = ({ urlToImage, publishedAt, title, name }) => {
  const formattedTime = moment(publishedAt).format("h");

  return (
    <div className="space-y-2 relative text-gray-900 flex flex-col item-center group hover:opacity-90 cursor-pointer">
      <img
        src={urlToImage}
        alt="image"
        className="object-cover h-[200px] group-hover:scale-105"
      />
      <div className="px-2 py-2 bottom-2">
        <p className="text-md gap-x-2 italic pt-2 font-bold hover:underline">
          {title}
        </p>
        <div className="flex  flex-col gap-x-2 text-sm  italic pt-2">
          <p className="text-red-700">{formattedTime} hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
