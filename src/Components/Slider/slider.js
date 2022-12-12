import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function BunnerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    Arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img className="bunnerImg" src="./img/bunner.jpg" alt="cart" />
        </div>
        <div>
          <img className="bunnerImg" src="./img/bunner.jpg" alt="cart" />
        </div>
        <div>
          <img className="bunnerImg" src="./img/bunner.jpg" alt="cart" />
        </div>
      </Slider>
    </div>
  );
}

export default BunnerSlider;
