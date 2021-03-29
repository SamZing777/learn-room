import React, { useRef } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import MobileNavigation from "./mobile_naviagtion";

const Navigation = () => {
  const navigationRef = useRef(null);
  return (
    <nav className="navigation">
      <div
        className="mobile-side-navigation-menu-container"
        ref={navigationRef}
      >
        <MobileNavigation navigationRef={navigationRef} />
      </div>
      <span
        className="burger"
        onClick={() => {
          navigationRef.current.classList.add("activate-sidenav");
        }}
      >
        <span />
        <span />
        <span />
      </span>
      <a href="#somewhere" className="brand">
        Learnroom
      </a>
      <div className="mobile-menu">
        <a href="#search">
          <FaBell />
        </a>
        <a href="#search">
          <FaSearch />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
