import React from "react";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavigation = ({ navigationRef }) => {
  return (
    <div className="mobile-side-navigation">
      <button
        className="close-btn"
        onClick={() => {
          navigationRef.current.classList.remove("activate-sidenav");
        }}
      >
        <FaTimes />
      </button>
      {/* mobile navigation top */}
      <div className="mobile-navigation-top">
        <div className="top">
          <div className="avatar-rounded">
            <span className="indicator" />
          </div>
          <div className="user-details">
            <h5>Hi, James Brown</h5>
            <p style={{ fontSize: "14px" }}>Welcome back</p>
          </div>
        </div>
        <p style={{ color: "green", padding: "15px 0" }}>
          <a href="#instructor" style={{ color: "inherit" }}>
            Switch to instructor view
          </a>
        </p>
      </div>
      {/* mobile navigation bottom */}
      <div className="your-learning">
        <p className="title">Learn</p>
        <a href="#mylearning">My learning</a>
        <Link to="/auth/login" className="auth-link login">
          Login
        </Link>
        <Link to="/auth/signup" className="auth-link signup">
          Signup
        </Link>
      </div>
      <div className="mobile-navigation-bottom">
        <ul>
          <li>
            <Link to="/category">
              <span>Academics</span>
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="/category/?category=1">
              <span>Finance</span>
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="/category/?category=4">
              <span>Linguistics</span>
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="category/?category=3">
              <span>Master Class</span>
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="category/?category=2">
              <span>Professional</span>
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="/category">
              <span>Technology</span>
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="/category">
              <span>Vocational</span>
              <FaChevronRight />
            </Link>
          </li>
        </ul>
      </div>
      <div className="why-learn-room">
        <Link to="/why_choose_us">Why choose us?</Link>
      </div>
      <div className="more-from-learn-room">
        <p className="title">More from Learnroom</p>
        <a href="#forbusiness">LearnRoom for business</a>
        <a href="#get_app">Get the app</a>
        <a href="#invite_friends">Invite friends</a>
        <a href="#jobs">Jobs</a>
      </div>
    </div>
  );
};

export default MobileNavigation;
