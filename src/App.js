import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resobj } from "./utils/data.js";
import Header from "./components/Header.jsx";
import RestrauntCard from "./components/RestrauntCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./components/shimmer.js";

const BodyApp = () => {
  const [resrest, setresrest] = useState(resobj);
  const [inp, setinp] = useState("");
  const [data1, setdata1] = useState(resobj);

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
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );

    setdata1(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(data1);
    console.log(resrest);
  };

  return resrest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search_bar">
        <input
          type="text"
          value={inp}
          onChange={(e) => {
            setinp(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredlist = resrest.filter((res) =>
              res.info.name.toLowerCase().includes(inp.toLowerCase())
            );
            setdata1(filteredlist);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          onClick={() => {
            const filterdlist = resrest.filter((res) => res.info.avgRating > 4);
            console.log(filterdlist);
            setdata1(filterdlist);
          }}
          className="filter-btn"
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="Res-container">
        {data1.map((restraunt) => {
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
