import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="burger">
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
