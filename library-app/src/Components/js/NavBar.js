import React from "react";
import { Link } from "react-router-dom";
// import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="bg-[#343a40] text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="m-0 text-xl">مكتبة الكتب</h1>
      <ul className="list-none flex m-0 p-0">
        <li className="ml-4">
          <Link
            to="/"
            className="text-white no-underline text-base transition duration-300 hover:text-yellow-400"
          >
            الرئيسية
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to="/about"
            className="text-white no-underline text-base transition duration-300 hover:text-yellow-400"
          >
            من نحن
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to="/contact"
            className="text-white no-underline text-base transition duration-300 hover:text-yellow-400"
          >
            اتصل بنا
          </Link>
        </li>
        <li className="ml-4">
          <Link
            to="/signup"
            className="bg-yellow-400 text-black p-2 rounded font-bold transition duration-300 hover:bg-white hover:text-[#495057]"
          >
            تسجيل
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
