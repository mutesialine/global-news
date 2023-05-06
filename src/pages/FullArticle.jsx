import moment from "moment";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import { BsArrowRight } from "react-icons/bs";

const FullArticle = () => {
  const { state } = useLocation();
  const formattedTime = moment(state.publishedAt).format("h");
  return (
    <div className="pt-16 pb-10 px-12">
      <Link to="/" className="bg-gray-200 p-2 rounded-md hover:opacity-70">
        Back to Home
      </Link>
      <div className="text-black flex flex-col md:flex-row gap-6 md:items-center pt-4">
        <div className="space-y-8">
          <p className="text-2xl font-bold text-red-800">{state.title}</p>
          <img
            src={state.urlToImage}
            alt="image"
            className="md:h-[500px] object-cover w-fit"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-red-800">{state.source.name}</p>
          <p className="text-xl md:text-2xl">{state.description}</p>
          <div className="flex gap-x-2 items-center py-2 px-4 bg-red-800 text-white w-fit rounded-md cursor-pointer hover:opacity-90">
            <a href={state.url} target="_blank" className="text-lg">
              Read more
            </a>
            <BsArrowRight size={24} />
          </div>
          <ul className="marker:text-red-500 list-disc pl-5 space-y-3 text-red-500">
            <li>{formattedTime}hours ago</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
