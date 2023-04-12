import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Wrapper from "../components/layout/Wrapper";

const FullArticle = () => {
  const { state } = useLocation();
  return (
    <Wrapper>
      <div className="pt-24 pb-6 px-12">
        <Link to="/" className="bg-gray-200 p-2 w-fit rounded-md">
          Back to Home
        </Link>
        <div className="text-black flex flex-col md:flex-row gap-6 md:items-center pt-4">
          <div className="space-y-4">
            <p className="text-3xl font-bold text-red-800">{state.title}</p>
            <img
              src={state.urlToImage}
              alt="image"
              className="md:h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <p className="text-red-700">{state.source.name}</p>
            <p className=" text-3xl">{state.description}</p>
            <a
              href={state.url}
              className="text-red-500 text-lg hover:opacity-80"
            >
              More...
            </a>

            <p>{state.publishedAt}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FullArticle;
