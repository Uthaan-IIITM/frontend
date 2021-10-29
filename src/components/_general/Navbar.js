import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import reactDom from "react-dom";
import PropTypes from "prop-types";
import { Divide as Hamburger } from "hamburger-react";

import "../../styles/_general/Navbar.css";

import { allRoutes } from "./../../utils/GeneralConstants";

import UthaanLogo from "../../assets/uthaan_logo/uthaan_logo.svg";

import useMediaQuery from "./helpers/useMediaQuery";

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
  const hamburgerMenuListRef = useRef(256);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [currentNavbarState, setCurrentNavbarState] = useState(true);

  const [windowWidthValue] = useMediaQuery();

  const { pathname } = useLocation();

  useEffect(() => {
    if (allRoutes.includes(pathname.split("/")[1]) != isNavbarVisible) {
      setIsNavbarVisible(allRoutes.includes(pathname.split("/")[1]));
    }
  }, [pathname]);

  useEffect(() => {
    setCurrentNavbarState(windowWidthValue > 900);
  }, [windowWidthValue]);
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
  const NavbarHamburgerRoutersNameList = NavbarRoutersName.map(
    (router, index) => {
      return (
        <NavLink
          exact
          to={NavbarRouters[index]}
          key={index}
          activeClassName="navbar-active-class"
          className="navbar-hamburger-item"
        >
          {router}
        </NavLink>
      );
    }
  );

  return (
    <>
      {isNavbarVisible ? (
        <nav
          className="navbar-main-wrapper"
          style={{
            paddingLeft: `calc(${paddingLeftDifferenceValue}*${slidingIndex} + ${paddingLeftDefaultValue})`,
            paddingRight: `calc(${paddingRightDifferenceValue}*${slidingIndex} + ${paddingRightDefaultValue})`,
          }}
        >
          <div className="navbar-secondary-wrapper">
            {currentNavbarState ? (
              <>
                <a href="/" className="navbar-main-left-wrapper">
                  <img src={UthaanLogo} alt="UthaanLogo" />
                </a>
                <div className="navbar-main-right-wrapper">
                  {NavbarRoutersNameList}
                </div>
              </>
            ) : (
              <>
                <a href="/" className="navbar-main-left-wrapper">
                  <img src={UthaanLogo} alt="UthaanLogo" />
                </a>
                <div
                  className="navbar-hamburger-wrapper"
                  tabIndex={0}
                  onClick={(e) => setIsHamburgerOpen(true)}
                  onBlur={(e) => {
                    setIsHamburgerOpen(false);
                  }}
                >
                  <div>
                    <Hamburger
                      toggled={isHamburgerOpen}
                      toggle={isHamburgerOpen}
                      size={20}
                      color="#222222"
                      label="Show menu"
                      duration={0.5}
                      hideOutline={false}
                    />
                  </div>
                  <div
                    className="navbar-hamburger-links-list-wrapper"
                    ref={hamburgerMenuListRef}
                    style={
                      isHamburgerOpen
                        ? {
                            opacity: 1,
                            height: reactDom.findDOMNode(
                              hamburgerMenuListRef.current
                            ).scrollHeight,
                            pointerEvents: "all",
                          }
                        : {
                            opacity: 0,
                            height: 0,
                            pointerEvents: "none",
                          }
                    }
                  >
                    {NavbarHamburgerRoutersNameList}
                  </div>
                </div>
              </>
            )}
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
