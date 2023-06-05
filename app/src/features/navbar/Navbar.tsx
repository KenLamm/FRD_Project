import React from "react";
import App from "../../pages/navbarPages/Navbar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">首頁</a>
        </li>
        <li className="navbar-item">
          <a href="/about">關於我們</a>
        </li>
        <li className="navbar-item">
          <a href="/services">服務</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">聯繫我們</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
