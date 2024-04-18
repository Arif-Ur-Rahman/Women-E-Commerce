import React from "react";
import Categories from "../categories/Categories";
import Slider from "./slider/Slider";
const Hero = () => {
  return (
    <main className="py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Categories />
          </div>
          <div className="col-md-8">
            <Slider />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
