import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>مكتبة الكتب</h1>
      <ul>
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/about">من نحن</Link>
        </li>
        <li>
          <Link to="/contact">اتصل بنا</Link>
        </li>
        <li>
          <Link to="/signup" className="signup-button">
            تسجيل
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
