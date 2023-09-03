import React, { Suspense, lazy, useState } from "react";
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
import useOnlineStatus from "./utils/useOnlineStatus.js";
const BodyApp = () => {
  const [inp, setinp] = useState("");

  const [resrest, data1] = useSwiggyData();
  const online = useOnlineStatus();
  if (online === false) return <h1>You are offline</h1>;
  return resrest === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search_bar m-6 bg-gray-400">
        <input
          className="border border-solid border-black"
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
      <div className="Res-container flex flex-wrap">
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
const Grocery = lazy(() => {
  return import("./components/Grocery.js");
});
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
import Error from "./components/Error";
import useOnlineStatus from "./utils/useOnlineStatus.js";
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
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
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
