import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <select type="select">
        <option selected={true}>English</option>
        <option>French</option>
        <option>Dutch</option>
      </select>
      <nav>
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
