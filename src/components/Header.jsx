import { useState } from "react";
import { logo_url } from "../utils/data";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setlogin] = useState("login");
  return (
    <div className="flex">
      <div>
        <img className="w-4" src={logo_url} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <Link to="/grocery">
            <li>Grocery</li>
          </Link>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>cart</li>
          <button
            onClick={() => {
              login === "login" ? setlogin("logout") : setlogin("login");
            }}
            className="login_btn"
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
