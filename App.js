import React from "react";
import ReactDOM from "react-dom/client";

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
      <div className="Res-container"></div>
    </div>
  );
};
const ResCard = () => {
  return (
    <div className="res-card">
      <img
        className="foodphoto"
        src="https://b.zmtcdn.com/data/brand_creatives/logos/6799a847a4bfaee73f5e14aaba8cef83_1638193272.png?output-format=webp"
        alt="Food Photo"
      />
      <h3>Samrat Hotel</h3>
      <h4>Indian,chinese,continental along with night stays</h4>
      <h4>4.5 Stars</h4>
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
