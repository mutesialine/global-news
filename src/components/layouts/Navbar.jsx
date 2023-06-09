import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../features/news";
import { Link } from "react-router-dom";
const Navbar = () => {
  const inputValue = useSelector((state) => state.news.inputValue);
  const dispatch = useDispatch();
  return (
    <div className="w-full text-gray-900">
      <div className="py-8 px-4 md:px-32 flex gap-x-6 justify-between border-b-2 border-gray-900">
        <Link
          to="/"
          className="text-lg md:text-4xl font-bold italic hover:underline"
        >
          GNews
        </Link>
        <div className="flex gap-2 px-2 items-center border divide-x divide-solid bg-white rounded-full cursor-pointer shadow-md">
          <input
            type="text"
            placeholder="search"
            value={inputValue}
            className="outline-none text-bg-gray-900 w-12 pl-4 sm:w-auto text-sm"
            onChange={(event) => dispatch(setInputValue(event.target.value))}
          />
          <div className="cursor-pointer">
            <AiOutlineSearch size={32} className="text-gray-700 pl-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
