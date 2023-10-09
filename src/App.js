import React, { useContext, Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Header from "./components/Header.jsx";
import Cart from "./components/Cart.js";

import RestrauntCard, {
  withPromotedLabel,
} from "./components/RestrauntCard.jsx";
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
  const data = useContext(UserContext);

  const [resrest, data1] = useSwiggyData();
  const online = useOnlineStatus();
  const RestrauntCardPromoted = withPromotedLabel(RestrauntCard);

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
      <div className="m-4 p-4">
        <label className="p-4">USername</label>
        <input
          className="border border-black px-4"
          type="text"
          value={data.loggedinUser}
          onChange={(e) => data.setusername(e.target.value)}
        />
        <div></div>
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
              {restraunt.info.aggregatedDiscountInfoV3 ? (
                Object.keys(restraunt.info.aggregatedDiscountInfoV3).length >
                1 ? (
                  <RestrauntCardPromoted restraunt={restraunt} />
                ) : (
                  <RestrauntCard restraunt={restraunt} />
                )
              ) : (
                <RestrauntCard restraunt={restraunt} />
              )}
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
  const [username, setusername] = useState();
  useEffect(() => {
    //Making a dummy api call for fetchin the user name of logged in user
    const data = {
      name: "ghonteswar",
    };
    setusername(data.name);
  });
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedinUser: username, setusername }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
import Error from "./components/Error";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./utils/UserContext.js";
import react from "react";
import appStore from "./utils/appStore.js";

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
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("groot"));
root.render(<RouterProvider router={appRouting} />);
