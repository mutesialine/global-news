import React from 'react'
import NewsCard from '../ui/NewsCard';
const Hero = () => {
  return (
    <>
      <div className=" bg-black flex text-white font bold text-xl font bold px-8 gap-x-4">
        <p className="">Aline</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 py-8 px-16 bg-gray-100">
        <NewsCard styles={"col-span-2 row-span-2 h-full w-full"} />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
}

export default Hero

