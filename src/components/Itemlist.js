import { foodimgurl } from "../utils/data";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Itemlist = ({ inf }) => {
  /*let data = [];
  data = inf.itemCards;
  console.log(data);*/

  /*if (inf.title === "Recommended") {
    
  } else {
    data = inf.categories[0].itemCards;
  }*/

  const dispatch = useDispatch();
  const handleaddItem = (d) => {
    //dispatch action
    console.log("clicked add button");
    console.log(d);
    dispatch(addItem(d));
  };

  return (
    <div>
      <ul>
        {inf.map((d) => {
          return (
            <div key={d.card.info.id}>
              <div className="Food-items m-4 p-4 bg-red-300 flex justify-between">
                <li key={d.card.info.id}>
                  <div>
                    {" "}
                    {d.card.info.name} price : Rs{" "}
                    {d.card.info.defaultPrice
                      ? d.card.info.defaultPrice / 100
                      : d.card.info.price / 100}{" "}
                    ratings {d.card.info.ratings.aggregatedRating.rating}{" "}
                  </div>

                  <div className="p-2 m-2">{d.card.info.description}</div>

                  <div>
                    <button
                      onClick={() => handleaddItem(d)}
                      className="border border-black text-center p-5 bg-white "
                    >
                      Add Item
                    </button>
                  </div>
                </li>
                <li>
                  {
                    <div className="p-4 m-4">
                      <img
                        className="food_itemlogo"
                        src={foodimgurl + d.card.info.imageId}
                      />
                    </div>
                  }
                </li>
              </div>
            </div>
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default Itemlist;
