import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";

const Restaurantitemlist = ({ data, showItems, changeIndex }) => {
  const handleClick = () => {
    changeIndex();
  };

  return (
    <div
      key={data.title}
      className="w-6/12 mx-auto shadow-black my-6 bg-gray-400 text-2xl  "
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>{data.title}</span>
        <span>⬇️</span>
      </div>

      {showItems ? <Itemlist inf={data.itemCards} /> : null}
    </div>
  );
};

export default Restaurantitemlist;
