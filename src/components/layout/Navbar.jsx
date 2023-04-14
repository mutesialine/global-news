import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../features/news";
const Navbar = () => {
  const inputValue = useSelector((state) => state.news.inputValue);
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="py-8 px-4 md:px-32 flex gap-x-6 justify-between border-b-2 border-black">
        <h2 className="text-lg md:text-4xl font-bold italic">GNews</h2>
        <div className="flex gap-2 px-2 items-center border divide-x divide-solid bg-white shadow-md">
          <input
            type="text"
            placeholder="search"
            value={inputValue}
            className="outline-none text-black w-12 sm:w-auto text-sm"
            onChange={(event) => dispatch(setInputValue(event.target.value))}
          />
          <AiOutlineSearch size={24} className="text-gray-700 pl-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
