import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";

const Restaurantitemlist = (data) => {
  const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
    setshowItems(!showItems);
  };
  return (
    <div
      key={data.data.title}
      className="w-6/12 mx-auto shadow-black my-6 bg-gray-400 text-2xl  "
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>{data.data.title}</span>
        <span>⬇️</span>
      </div>
      {showItems && <Itemlist inf={data} />}
    </div>
  );
};

export default Restaurantitemlist;
