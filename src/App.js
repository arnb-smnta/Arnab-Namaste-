import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resobj } from "./utils/data.js";
import Header from "./components/Header.jsx";
import RestrauntCard from "./components/RestrauntCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./components/shimmer.js";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.js";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
const BodyApp = () => {
  const [resrest, setresrest] = useState(resobj);
  const [inp, setinp] = useState("");
  const [data1, setdata1] = useState(resobj);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setresrest(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );

    setdata1(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
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
      <Outlet />
    </div>
  );
};
import Error from "./components/Error";
const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <BodyApp /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("groot"));
root.render(<RouterProvider router={appRouting} />);
