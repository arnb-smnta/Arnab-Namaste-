import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resobj } from "./utils/data.js";
import Header from "./components/Header.jsx";
import RestrauntCard from "./components/RestrauntCard.jsx";
import { useState } from "react";
const BodyApp = () => {
  const [resrest, setresrest] = useState(resobj);
  return (
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
