import { useState, useEffect } from "react";
import { menu_url, foodimgurl } from "../utils/data";
import { Shimmer } from "./shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId.toString());
  const [resdata, setresdata] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(menu_url + resId.toString());
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
          return (
            <div key={res.card.info.id} className="Food-items">
              <li>
                {res.card.info.name} price {res.card.info.price / 100} ratings{" "}
                {res.card.info.ratings.aggregatedRating.rating}{" "}
                {
                  <img
                    className="food_itemlogo"
                    src={foodimgurl + res.card.info.imageId}
                  />
                }
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
{
  /** Next step add prices and dynamic routing for each and every restaurant */
}
