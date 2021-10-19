import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/_general/Navbar.css";

import UthaanLogo from "../../assets/uthaan_logo/uthaan_logo.svg";
import { allRoutes } from "./../../utils/GeneralConstants";

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

function Navbar({
  slidingIndex,
  paddingLeftDefaultValue,
  paddingLeftDifferenceValue,
  paddingRightDefaultValue,
  paddingRightDifferenceValue,
  marginLeftDefaultValue,
  marginLeftDifferenceValue,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    console.log(pathname.split("/")[1]);
    console.log(allRoutes.includes(pathname.split("/")[1]));
  }, [pathname]);

  const NavbarRoutersNameList = NavbarRoutersName.map((router, index) => {
    return (
      <NavLink
        exact
        to={NavbarRouters[index]}
        key={index}
        activeClassName="navbar-active-class"
        className="navbar-main-right-link"
        style={{
          marginLeft: `calc(${marginLeftDifferenceValue}*${slidingIndex} + ${marginLeftDefaultValue})`,
        }}
      >
        {router}
      </NavLink>
    );
  });

  return (
    <>
      {allRoutes.includes(pathname.split("/")[1]) ? (
        <nav
          className="navbar-main-wrapper"
          style={{
            paddingLeft: `calc(${paddingLeftDifferenceValue}*${slidingIndex} + ${paddingLeftDefaultValue})`,
            paddingRight: `calc(${paddingRightDifferenceValue}*${slidingIndex} + ${paddingRightDefaultValue})`,
          }}
        >
          <a href="/" className="navbar-main-left-wrapper">
            <img src={UthaanLogo} alt="UthaanLogo" />
          </a>
          <div className="navbar-main-right-wrapper">
            {NavbarRoutersNameList}
          </div>
        </nav>
      ) : null}
    </>
  );
}

Navbar.propTypes = {
  slidingIndex: PropTypes.number,
  paddingLeftDefaultValue: PropTypes.string,
  paddingLeftDifferenceValue: PropTypes.string,
  paddingRightDefaultValue: PropTypes.string,
  paddingRightDifferenceValue: PropTypes.string,
  marginLeftDefaultValue: PropTypes.string,
  marginLeftDifferenceValue: PropTypes.string,
};

Navbar.defaultProps = {
  slidingIndex: 0,
  paddingLeftDefaultValue: "6.9vw",
  paddingLeftDifferenceValue: "-2vw",
  paddingRightDefaultValue: "6.9vw",
  paddingRightDifferenceValue: "-2vw",
  marginLeftDefaultValue: "2.1vw",
  marginLeftDifferenceValue: "0.25vw",
};

export default Navbar;
