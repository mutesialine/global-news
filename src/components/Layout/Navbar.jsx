import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { searchCategory } from "../../features/news";
const Navbar = () => {
  const searchArticles = useSelector((state) => state.news.search);
  const dispatch = useDispatch();
  return (
    <div className="text-black py-8 px-32 flex justify-between border-b-2 border-black">
      <h2 className="text-4xl font-bold italic">GNews</h2>
      <div className="flex gap-2  px-4 items-center border divide-x divide-solid">
        <input
          type="text"
          placeholder="search"
          value={searchArticles}
          className="outline-none text-black"
          onChange={(event) => dispatch(searchCategory(event.target.value))}
        />
        <AiOutlineSearch
          size={24}
          className="pl-2"
          onClick={() => dispatch(searchCategory(inputValue))}
        />
      </div>
    </div>
  );
};

export default Navbar;
