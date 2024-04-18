import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./slider.css";
const Slider = () => {
  return (
    <div className="slider">
      <div className="list">
        <div className="item">
          <img src="./image/img1.jpg" alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">FLOWER</div>
            <div className="description">
              Lorem ipsum dolor sit consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="./image/img2.jpg" alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">NATURE</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="./image/img4.jpg" alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">PLANT</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="./image/img3.jpg" alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">NATURE</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail">
        <div className="item">
          <img src="./image/img1.jpg" alt="" />
        </div>
        <div className="item">
          <img src="./image/img2.jpg" alt="" />
        </div>
        <div className="item">
          <img src="./image/img4.jpg" alt="" />
        </div>
        <div className="item">
          <img src="./image/img3.jpg" alt="" />
        </div>
      </div>

      <div className="nextPrevArrows">
        <button className="prev">
          {" "}
          <FaArrowAltCircleLeft />
        </button>
        <button className="next">
          {" "}
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
