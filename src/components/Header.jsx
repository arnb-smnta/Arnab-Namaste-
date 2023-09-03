import { useState } from "react";
import { logo_url } from "../utils/data";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setlogin] = useState("login");
  return (
    <div className="flex justify-between bg-gray-400">
      <div>
        <img className="w-64" src={logo_url} />
      </div>
      <div className="nav-items px-4 flex items-center">
        <ul className="flex">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/About">About us</Link>
          </li>
          <Link to="/grocery">
            <li className="p-4">Grocery</li>
          </Link>
          <li className="p-4">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="p-4">cart</li>
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
