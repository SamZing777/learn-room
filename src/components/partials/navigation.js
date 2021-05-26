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
            <a href="/category/?category=1&title=academics">
              Academics
            </a>
          </li> */}
          <li>
            <Link to="/category/?category=1&title=finance">
              Finance
            </Link>
          </li>
          <li>
            <Link to="/category/?category=4&title=linguistics">
              Linguistics
            </Link>
          </li>
          <li>
            <Link to="/category/?category=3&title=Master Class">
              Master Class
            </Link>
          </li>
          <li>
            <Link to="/category/?category=2&title=Professional">
              Professional
            </Link>
          </li>
          {/* <li>
            <Link to="/category?category=6&title=technology">
              Technology
            </Link>
          </li>
          <li>
            <Link to="/category/?category=7&title=vocational">
              Vocational
            </Link>
          </li> */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
