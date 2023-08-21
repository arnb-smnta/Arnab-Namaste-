import React from "react";
import ReactDOM from "react-dom/client";
import resobj from "../data.js";
import Header from "./components/Header.jsx";
const res = resobj;

const BodyApp = () => {
  return (
    <div className="body">
      <h3>Search</h3>
      <button className="searchbutton_body">Search</button>
      <div className="Res-container">
        {resobj.map((restraunt) => {
          return <ResCard restraunt={restraunt} />;
        })}
      </div>
    </div>
  );
};
const ResCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="foodphoto"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.restraunt.info.cloudinaryImageId
        }
        alt="Food Photo"
      />
      <h3>{props.restraunt.info.name}</h3>
      <h4>Cuisines {props.restraunt.info.cuisines.join(" ")}</h4>
      <h4>Avg Rating {props.restraunt.info.avgRating} stars</h4>
      <h4>Cost for two {props.restraunt.info.costForTwo}</h4>
      <h4>Place {props.restraunt.info.areaName}</h4>
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
