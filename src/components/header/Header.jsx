import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./header.css";
const Header = () => {
  return (
    <header id="header-top" className="header-top">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 ">
            <ul className="d-flex align-item-center p-0 mt-3 mb-0">
              <li>
                <a href="/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <CiLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaGooglePlusG />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex">
            <div className="dropdown mt-3">
              <a
                className="btn dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Bangla
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown mt-3">
              <a
                className="btn dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Currency
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    USD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    BDT
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <a href="/">Login/Register</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
