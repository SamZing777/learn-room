import React from "react";
import { FaChevronRight, FaTimes } from "react-icons/fa";

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
      </div>
      <div className="mobile-navigation-bottom">
        <ul>
          <li>
            <a href="#Academics">
              <span>Academics</span>
              <FaChevronRight />
            </a>
          </li>
          <li>
            <a href="#Finace">
              <span>Finace</span>
              <FaChevronRight />
            </a>
          </li>
          <li>
            <a href="#Linguistics">
              <span>Linguistics</span>
              <FaChevronRight />
            </a>
          </li>
          <li>
            <a href="#Master Class">
              <span>Master Class</span>
              <FaChevronRight />
            </a>
          </li>
          <li>
            <a href="#Professional">
              <span>Professional</span>
              <FaChevronRight />
            </a>
          </li>
          <li>
            <a href="#Technology">
              <span>Technology</span>
              <FaChevronRight />
            </a>
          </li>
          <li>
            <a href="#Vocational">
              <span>Vocational</span>
              <FaChevronRight />
            </a>
          </li>
        </ul>
      </div>
      <div className="why-learn-room">
        <a href="#why_choose_us">Why choose us?</a>
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
