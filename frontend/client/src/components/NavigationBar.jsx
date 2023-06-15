import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./authentication/LoginButton";
import LogoutButton from "./authentication/LogoutButton";
import Profile from "./authentication/Profile";

import Budget from "../routes/Budget";
import Debt from "../routes/Debt";
import Savings from "../routes/Savings";
import Stocks from "../routes/Stocks";
import Learn from "../routes/Learn";
import { menuItems } from "../menuItems";
import MenuItems from './MenuItems';

const NavigationBar = () => {
  const { isLoading, error } = useAuth0();


  return (
    <div>
      <h2>This is the Nav component</h2>
      {/* <h1>Auth0 Login</h1> */}
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && <></>}
      <LoginButton />
      <LogoutButton />

      <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/budget">Budget</Link>
        <br />
        <Link to="/savings">Savings</Link>
        <br />
        <Link to="/debt">Debt</Link>
        <br />
        <Link to="/stocks">Stocks</Link>
        <br />
        <Link to="/learn">Learn</Link>
        <br />
      </nav>
    </div>
  );
};

export default NavigationBar;
