import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  NavLink,
} from "react-router-dom";

import "../../styles/_general/Navbar.css";
import UthaanLogo from "../../assets/uthaan_logo/uthaan_logo.svg";

const NavbarRoutersName = [
  "Home",
  "Events",
  "Shows",
  "Articles",
  "Interviews",
  "Gallery",
  "Team",
  "Contact Us",
];
const NavbarRouters = [
  "/",
  "/events",
  "/shows",
  "/articles",
  "/interviews",
  "/gallery",
  "/team",
  "/contactus",
];

const NavbarRoutersNameList = NavbarRoutersName.map((router, index) => {
  return (
    <NavLink
      exact
      to={NavbarRouters[index]}
      key={index}
      activeClassName="navbar-active-class"
      className="navbar-main-right-link"
    >
      {router}
    </NavLink>
  );
});

function Navbar() {
  return (
    <nav className="navbar-main-wrapper">
      <div className="navbar-main-left-wrapper">
        <img src={UthaanLogo} alt="UthaanLogo" />
      </div>
      <div className="navbar-main-right-wrapper">{NavbarRoutersNameList}</div>
    </nav>
  );
}

export default Navbar;
