import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { PiBaseballCapBold, PiDressBold, PiPantsFill } from "react-icons/pi";
import { FaPersonDressBurst } from "react-icons/fa6";
import { GiAmpleDress, GiSonicShoes } from "react-icons/gi";
import "./categories.css";
import { IoIosMore } from "react-icons/io";
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
            <FaPersonDressBurst />
            Children
          </a>
        </li>
        <li>
          <a href="/">
            <GiAmpleDress />
            Tops
          </a>
        </li>
        <li>
          <a href="/">
            <PiPantsFill />
            Bottoms
          </a>
        </li>
        <li>
          <a href="/">
            <GiSonicShoes />
            Shoes
          </a>
        </li>
        <li>
          <a href="/">
            <PiBaseballCapBold />
            Accessories
          </a>
        </li>
        <li>
          <a href="/">
            <IoIosMore />
            Others
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
