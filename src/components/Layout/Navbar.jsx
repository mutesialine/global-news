import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function Navbar() {
  return (
      <div className="text-black py-8 px-32 flex justify-between border-b-2 border-black">
        <h2 className="text-4xl font-bold italic">GNews</h2>
        <div className="flex gap-2  px-4 items-center border divide-x divide-solid">
          <input type="text" placeholder="search" className="outline-none text-black" />
          <AiOutlineSearch size={24} className="pl-2" />
        </div>
      </div>
      
  );
}

export default Navbar
