import { useState } from "react";
import { logo_url } from "../utils/data";
const Header = () => {
  const [login, setlogin] = useState("login");
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo_url} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
