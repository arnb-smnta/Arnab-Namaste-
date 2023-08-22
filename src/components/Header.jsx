import { logo_url } from "../utils/data";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
