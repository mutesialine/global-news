import React from 'react'

const NewsCard = ({styles}) => {
  return (
    <div className={`${styles} relative text-white `}>
      <img
        src="https://static.timesofisrael.com/www/uploads/2023/03/33C92NG-highres-400x250.jpg"
        alt="image"
        className="object-cover relative w-full"
      />
      <div className="px-2 py-2 absolute bottom-2">
        <p className="text-sm leading-5 font-bold">
          North, center or south: Pack the matza pizza sandwiches, frolic in a
        </p>
        <div className="flex text-sm gap-x-2 italic pt-2">
          <span>by Johnson</span>
          <span>.2hrs ago</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard
