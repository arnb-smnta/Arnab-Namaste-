import { foodimgurl } from "../utils/data";
const Itemlist = (inf) => {
  let data = [];
  if (inf.inf.data.title === "Recommended") {
    data = inf.inf.data.itemCards;
  } else {
    data = inf.inf.data.categories[0].itemCards;
  }
  let date = [];

  return (
    <div>
      <ul>
        {data.map((d) => {
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
                </li>
                <li>
                  {
                    <img
                      className="food_itemlogo"
                      src={foodimgurl + d.card.info.imageId}
                    />
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
