import React from "react";
import ReactDOM from "react-dom/client";
import resobj from "./data.js";
const res = resobj;

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyApp = () => {
  return (
    <div className="body">
      <h3>Search</h3>
      <button className="searchbutton_body">Search</button>
      <div className="Res-container">
        {/* {resobj.map((restraunt) => {
          return <ResCard resData={restraunt} />;
        })} */}

        <ResCard restraunt={resobj[0]} />
      </div>
    </div>
  );
};
const ResCard = (props) => {
  const { resdata } = props;
  return (
    <div className="res-card">
      <img
        className="foodphoto"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resdata.info.cloudinaryImageId
        }
        alt="Food Photo"
      />
      <h3>{resdata.info.name}</h3>
      <h4>Cuisines {resdata.info.cuisines.join(" ")}</h4>
      <h4>Avg Rating {resdata.info.avgRating} stars</h4>
      <h4>Cost for two{resdata.info.costForTwo}</h4>
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
