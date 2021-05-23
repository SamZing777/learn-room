import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <select type="select" className="choose-language">
        <option defaultValue>English</option>
        <option>French</option>
        <option>Dutch</option>
      </select>
      <nav className="footer-navigation">
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <Link to="/why_choose_us">Why choose us?</Link>
          </li>
          <li>
            <a href="/">Featured courses</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Sitemap</a>
          </li>
          <li>
            <a href="/">Get the app</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
