import React from "react";
import Categories from "../categories/Categories";
import slider from "../../assets/images/benner/banner-04.jpg";
const Hero = () => {
  return (
    <main className="py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Categories />
          </div>
          <div className="col-md-8">
            <img src={slider} className="image-fluid" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
