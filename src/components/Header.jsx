import { useContext, useState } from "react";
import { logo_url } from "../utils/data";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setlogin] = useState("login");
  const data = useContext(UserContext);
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

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
          <li className="p-4">
            <Link to="/cart">Cart ({cartItems.length}items)</Link>
          </li>
          <button
            onClick={() => {
              login === "login" ? setlogin("logout") : setlogin("login");
            }}
            className="login_btn"
          >
            {login}
          </button>

          <li className="p-4 bold">{data.loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
