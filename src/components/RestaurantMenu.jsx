import { useState, useEffect } from "react";
import { menu_url } from "../utils/data";
import { Shimmer } from "./shimmer";
const RestaurantMenu = () => {
  const [resdata, setresdata] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(menu_url + "168043");
    const json = await data.json();
    console.log(json);

    setresdata(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  if (resdata === null) return <div>loading</div>;

  return (
    <div>
      <h1>Restaurant Name</h1>
      <ul className="MenuItems">
        {resdata.map((res) => {
          return <li>{res.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
