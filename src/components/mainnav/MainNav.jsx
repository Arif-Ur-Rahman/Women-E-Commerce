import React from "react";
import { FaHeadset } from "react-icons/fa6";
import benner from "../../assets/images/benner/banner-04.jpg";
import "./mainnav.css";
const MainNav = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-10 nav-items fw-medium">
            <ul className="d-flex">
              <li>
                <a href="/dress-home">Home</a>
              </li>
              <li>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="/"
                    data-bs-toggle="dropdown"
                  >
                    Shop
                  </a>

                  <ul className="dropdown-menu">
                    <div className="row">
                      <li className="col-md-2">
                        <h6>Category</h6>
                        <a className="dropdown-item" href="/">
                          T-Shart
                        </a>
                        <a className="dropdown-item" href="/">
                          T-Shart
                        </a>
                      </li>
                      <li className="col-md-2">
                        <h6>Category</h6>
                        <a className="dropdown-item" href="/">
                          Bangla
                        </a>
                      </li>
                      <li className="col-md-2">
                        <h6>Category</h6>
                        <a className="dropdown-item" href="/">
                          English
                        </a>
                      </li>
                      <li className="col-md-6">
                        <a className="dropdown-item" href="/">
                          <img src={benner} alt="" className="fluid" />
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 d-flex text-center hot-line">
            <FaHeadset />
            <h6>
              Hotline: <span>+09999999</span>
            </h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
