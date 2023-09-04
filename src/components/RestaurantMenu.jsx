import { useState, useEffect } from "react";
import { menu_url, foodimgurl } from "../utils/data";
import { Shimmer } from "./shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
const RestaurantMenu = () => {
  const { resId, res_name } = useParams();
  console.log(resId.toString());

  const resdata = useRestrauntMenu(resId);

  if (resdata === null) return <div>loading</div>;

  return (
    <div>
      <h1>{res_name}</h1>
      {console.log(resdata)}
      <ul className="MenuItems">
        {resdata.map((res) => {
          return (
            <div>
              <div
                key={res.card.info.id}
                className="Food-items m-4 p-4 bg-red-300 flex justify-between"
              >
                <li>
                  {res.card.info.name} price : Rs{" "}
                  {res.card.info.defaultPrice / 100} ratings{" "}
                  {res.card.info.ratings.aggregatedRating.rating}{" "}
                </li>
                <li>
                  {
                    <img
                      className="food_itemlogo"
                      src={foodimgurl + res.card.info.imageId}
                    />
                  }
                </li>
              </div>
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
