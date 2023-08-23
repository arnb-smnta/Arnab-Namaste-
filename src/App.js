import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resobj } from "./utils/data.js";
import Header from "./components/Header.jsx";
import RestrauntCard from "./components/RestrauntCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./components/shimmer.js";

const BodyApp = () => {
  const [resrest, setresrest] = useState(resobj);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.748431243684443&lng=88.34821924567223&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setresrest(
      json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return resrest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <h3>Search</h3>
      <button className="searchbutton_body">Search</button>
      <div className="filter">
        <button
          onClick={() => {
            const filterdlist = resobj.filter((res) => res.info.avgRating > 4);
            console.log(filterdlist);
            setresrest(filterdlist);
          }}
          className="filter-btn"
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="Res-container">
        {resrest.map((restraunt) => {
          return (
            <RestrauntCard key={restraunt.info.id} restraunt={restraunt} />
          );
        })}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyApp />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("groot"));
root.render(<Applayout />);
