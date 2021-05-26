import React, { useRef } from "react";
import { FaBell, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNavigation from "./mobile_naviagtion";

const Navigation = () => {
  const navigationRef = useRef(null);
  return (
    <React.Fragment>
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
        <Link to="/" className="brand">
          Learnroom
        </Link>
        <div className="desk-search-container">
          <input type="search" placeholder="What do you want to learn?" />
        </div>
        <div className="desk-nav-menu">
          <ul>
            <li>
              <Link to="/business">LearnRoom for Business</Link>
            </li>
            <li>
              <Link to="/become_an_instructor">Teach on LearnRoom</Link>
            </li>
            <li>
              <Link to="/my_learning">My Learning</Link>
            </li>
            <li>
              <FaHeart />
            </li>
            <li>
              <FaShoppingCart />
            </li>
            <li>
              <FaBell />
            </li>
          </ul>
        </div>
        <div className="mobile-menu">
          <a href="#search">
            <FaBell />
          </a>
          <a href="#search">
            <FaSearch />
          </a>
        </div>
      </nav>
      <div className="desk-bottom-nav">
        <ul>
          {/* <li>
            <a href="http://learnroom.herokuapp.com/course/courses/?category=1">
              Academics
            </a>
          </li> */}

          <li>
            <a href="http://learnroom.herokuapp.com/course/courses/?category=1">
              Finance
            </a>
          </li>
          <li>
            <a href="http://learnroom.herokuapp.com/course/courses/?category=4">
              Linguistics
            </a>
          </li>
          <li>
            <a href="http://learnroom.herokuapp.com/course/courses/?category=3">
              Master Class
            </a>
          </li>
          <li>
            <a href="http://learnroom.herokuapp.com/course/courses/?category=2">
              Professional
            </a>
          </li>
          {/* <li>
            <a href="http://learnroom.herokuapp.com/course/courses?category=6&title=technology">
              Technology
            </a>
          </li>
          <li>
            <a href="http://learnroom.herokuapp.com/course/courses/?category=7&title=vocational">
              Vocational
            </a>
          </li> */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
