import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import { BsArrowRight } from "react-icons/bs";
const FullArticle = () => {
  const { state } = useLocation();
  return (
    <Wrapper>
      <div className="pt-16 pb-8 px-12">
        <Link to="/" className="bg-gray-200 p-2 rounded-md hover:opacity-70">
          Back to Home
        </Link>
        <div className="text-black flex flex-col md:flex-row gap-6 md:items-center pt-4">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-red-800">{state.title}</p>
            <img
              src={state.urlToImage}
              alt="image"
              className="md:h-[500px] object-cover w-fit"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <p className="text-red-800">{state.source.name}</p>
            <p className="text-xl md:text-3xl">{state.description}</p>
            <div className="flex gap-x-2 items-center p-2 bg-red-800 text-white w-fit rounded-md cursor-pointer hover:opacity-90">
              <a href={state.url} className="text-lg">
                Read more
              </a>
              <BsArrowRight size={24} />
            </div>
            <p>{state.publishedAt}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FullArticle;
