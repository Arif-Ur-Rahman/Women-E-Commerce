import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { PiDressBold } from "react-icons/pi";
import "./categories.css";
const Categories = () => {
  return (
    <nav className="categories-nav">
      <div class="categories-menu">
        <h3 class="categories-menu-title">
          <HiMenuAlt2 /> Shop By Categories{" "}
        </h3>
      </div>
      <ul>
        <li>
          <a href="/">
            <PiDressBold />
            Women
          </a>
        </li>
        <li>
          <a href="/">
            <PiDressBold />
            Women
          </a>
        </li>
        <li>
          <a href="/">
            <PiDressBold />
            Women
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
