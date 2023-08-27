import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resobj } from "./utils/data.js";
import Header from "./components/Header.jsx";
import RestrauntCard from "./components/RestrauntCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./components/shimmer.js";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Contact from "./components/Contact.js";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { swiggy_api } from "./utils/data.js";
import useSwiggyData from "./utils/useSwiggyData.js";
const BodyApp = () => {
  const [inp, setinp] = useState("");

  const [resrest, data1] = useSwiggyData();

  return resrest === null ? (
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
            <Link
              key={restraunt.info.id}
              to={
                "/restaurant/" + restraunt.info.id + "/" + restraunt.info.name
              }
            >
              {" "}
              <RestrauntCard restraunt={restraunt} />
            </Link>
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
      { path: "/restaurant/:resId/:res_name", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("groot"));
root.render(<RouterProvider router={appRouting} />);
