import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import slide1 from "../../../assets/images/slider/img1.jpg";
import slide2 from "../../../assets/images/slider/img2.jpg";
import slide3 from "../../../assets/images/slider/img3.jpg";
import "./slider.css";

const Slider = () => {
  const SliderData = [
    {
      images: slide1,
      title: "MAGIC SLIDER",
      categories: "Women",
      description:
        "Lorem ipsum dolor sit consectetur  voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut",
      link: "/product",
    },
    {
      images: slide2,
      title: "MAGIC SLIDER",
      categories: "NATURE",
      description:
        "Lorem ipsum dolor sit consectetur adipisicing elit. Deleni temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut",
      link: "/product",
    },
    {
      images: slide3,
      title: "MAGIC SLIDER",
      categories: "NATURE",
      description:
        "Lorem ipsum dolor sit consectetur adipisicing elit. Deleni temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut",
      link: "/product",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === SliderData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? SliderData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider">
      <div className="list">
        {SliderData.map((data, index) => (
          <div
            key={index}
            className={`item ${index === currentSlide ? "active" : ""}`}
          >
            <img src={data.images} alt={data.categories} />
            <div className="content">
              <div className="title">{data.title}</div>
              <div className="type">
                <h5>{data.categories}</h5>
              </div>
              <div className="description">{data.description}</div>
              <div className="button">
                <button type="button" className="btn-submit">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {SliderData.map((data, index) => (
          <div key={index} className="item">
            <img src={data.images} alt={data.title} />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={prevSlide}>
          {" "}
          <FaArrowAltCircleLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          {" "}
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
