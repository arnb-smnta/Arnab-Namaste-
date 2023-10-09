import { useState, useEffect } from "react";
import { menu_url, foodimgurl } from "../utils/data";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import Restaurantitemlist from "./Restaurantitemlist";
const RestaurantMenu = () => {
  const { resId, res_name } = useParams();
  const [showIndex, setshowIndex] = useState(0);
  const resd = useRestrauntMenu(resId);

  if (resd === null) return <div>loading</div>;

  const resdata = resd.REGULAR.cards[1].card.card.itemCards;

  const categories = resd.REGULAR.cards?.filter((c) => {
    return (
      c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  return (
    <div key={resId.toString()}>
      <div className="text-center">
        <div className="text-4xl">{res_name}</div>
        {console.log("arnab")}

        {categories.map((category, index) => {
          return (
            <Restaurantitemlist
              key={category.card.card.title}
              data={category.card.card}
              showItems={index === showIndex ? true : false}
              changeIndex={() => {
                showIndex === index ? setshowIndex(null) : setshowIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
{
  /** Next step add prices and dynamic routing for each and every restaurant */
}
