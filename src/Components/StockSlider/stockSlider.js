import React from "react";
import { dataCartStock } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "../Cart/cart";
import "./stockSlider.css";

function StockSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    Arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className="slider-container">
        <h1>Акции</h1>
        <Slider {...settings}>
          {dataCartStock.map((item) => (
            <Cart
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default StockSlider;
