<ul>
  {data.map((d) => {
    return (
      <div key={d.card.info.id}>
        <div className="Food-items m-4 p-4 bg-red-300 flex justify-between">
          <li>
            {d.card.info.name} price : Rs{" "}
            {d.card.info.defaultPrice
              ? d.card.info.defaultPrice / 100
              : d.card.info.price / 100}{" "}
            ratings {res.card.info.ratings.aggregatedRating.rating}{" "}
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
</ul>;

//new code
<ul>
  {data.map((d) => {
    return (
      <li key={d.card.info.id}>
        <div className="p-2 m-2 ">
          {" "}
          <div>
            {d.card.info.name} {d.card.info.price / 100}
          </div>{" "}
          <div>
            {" "}
            <p>{d.card.info.description}</p>
          </div>
        </div>
      </li>
    );
  })}
</ul>;
