import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./authentication/LoginButton";
import LogoutButton from "./authentication/LogoutButton";
import Profile from "./authentication/Profile";
import "../styles/Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { menuItems } from "../menuItems";
import MenuItems from './MenuItems';

const NavigationBar = () => {
  const { isLoading, error } = useAuth0();

  return (
    <nav className='navbar'>
      <ul className="menus">

        <div className="logo fontweight-700 font-poppins">
          <FontAwesomeIcon icon="frog" className="fa-bounce fa-regular fa-lg" style={{ color: '#526E11' }} />
          <li><strong>Frog Finance</strong></li>
        </div>

        <div className="menu-items-container font-quicksand">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </div>

        <div className="menu-auth">
          <li>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && <></>}
            <LoginButton />
            <LogoutButton />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
