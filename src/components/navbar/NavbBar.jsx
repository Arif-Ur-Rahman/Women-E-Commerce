import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaRegHeart, FaShopify } from "react-icons/fa";

import "./navbar.css";
const NavbBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* <img src="" alt="" /> */}
            <h4>logo</h4>
          </div>
          <div className="col-md-6 search-form">
            <form action="">
              <input type="text" placeholder="Search products..." />
              <button type="submit" class="search-submit" value="">
                {" "}
                Search
              </button>
            </form>
          </div>
          <div className="col-md-3 d-flex">
            <div className="shop-icon">
              <a href="/">
                <IoMdNotifications />
              </a>
              <span class="cp-count">0</span>
            </div>
            <div className="shop-icon">
              <a href="/">
                <FaRegHeart />
              </a>
              <span class="cp-count">0</span>
            </div>
            <div className="shop-icon">
              <a href="/">
                <FaShopify />
              </a>
              <span class="cp-count">0</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default NavbBar;
