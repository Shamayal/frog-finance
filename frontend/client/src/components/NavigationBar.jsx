import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./authentication/LoginButton";
import LogoutButton from "./authentication/LogoutButton";
import Profile from "./authentication/Profile";

import { menuItems } from "../menuItems";
import MenuItems from './MenuItems';

const NavigationBar = () => {
  const { isLoading, error } = useAuth0();

  return (
    <div>
      <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
          })}
          <li>
            {/* <h1>Auth0 Login</h1> */}
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && <></>}
            <LoginButton />
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
