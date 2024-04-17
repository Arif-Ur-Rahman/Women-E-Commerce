import React from "react";
import Categories from "../categories/Categories";

const Hero = () => {
  return (
    <main className="py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Categories />
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
