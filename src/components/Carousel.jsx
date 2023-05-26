import React from "react";
import Slider from "react-slick";

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50px" }}
        onClick={onClick}
      />
    );
  }

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  return (
    <Slider {...settings} className="Carousel">
      <div>
        <img src="cat1.jpg" alt="Gato 1" />
      </div>
      <div>
        <img src="cat2.jpg" alt="Gato 2" />
      </div>
      <div>
        <img src="cat3.jpg" alt="Gato 3" />
      </div>
    </Slider>
  );
}
