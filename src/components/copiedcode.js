<ul className="MenuItems">
  {resdata.map((res) => {
    return (
      <div key={res.card.info.id}>
        <div className="Food-items m-4 p-4 bg-red-300 flex justify-between">
          <li>
            {res.card.info.name} price : Rs{" "}
            {res.card.info.defaultPrice
              ? res.card.info.defaultPrice / 100
              : res.card.info.price / 100}{" "}
            ratings {res.card.info.ratings.aggregatedRating.rating}{" "}
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
</ul>;
