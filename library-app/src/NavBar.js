import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>مكتبة الكتب</h1>
      <ul>
        <li>
          <a href="#home">الرئيسية</a>
        </li>
        <li>
          <a href="#books">الكتب</a>
        </li>
        <li>
          <a href="#contact">اتصل بنا</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
