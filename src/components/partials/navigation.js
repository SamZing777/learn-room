import React, { useRef } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const navigationRef = useRef(null);
  return (
    <nav className="navigation">
      <div
        className="mobile-side-navigation-menu-container"
        ref={navigationRef}
      >
        <div className="mobile-side-navigation">
          <button
            className="close-btn"
            onClick={() => {
              navigationRef.current.classList.remove("activate-sidenav");
            }}
          >
            <FaTimes />
          </button>
          <ul>
            <li>
              <a href="#somewhere">Your Profile</a>
            </li>
            <li>
              <a href="#somewhere">Academics</a>
            </li>
            <li>
              <a href="#somewhere">Financials</a>
            </li>
            <li>
              <a href="#somewhere">Health and Fitness</a>
            </li>
            <li>
              <a href="#somewhere">Master Class</a>
            </li>
            <li>
              <a href="#somewhere">Professional</a>
            </li>
            <li>
              <a href="#somewhere">Technology</a>
            </li>
            <li>
              <a href="#somewhere">Vocational</a>
            </li>
          </ul>
        </div>
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
