import React from "react";
import Header from "../header/Header";
import NavbBar from "../navbar/NavbBar";
import MainNav from "./MainNav";
import "./mainnav.css";
const AllNavbar = () => {
  return (
    <div className="all-navbar">
      <Header />
      <NavbBar />
      <MainNav />
    </div>
  );
};

export default AllNavbar;
