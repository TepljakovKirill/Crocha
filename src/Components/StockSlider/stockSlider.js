import React from "react";
import Cart from "../Cart/cart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./stockSlider.css";
import { dataCartStock } from "./data";

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

  const addShoppingCart = (obj) => {
    console.log(obj);
  };

  return (
    <div className="container">
      <div className="slider-container">
        <h1>Акции</h1>
        <Slider {...settings}>
          {dataCartStock.map((item) => (
            <Cart
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              addToCart={(obj) => addShoppingCart(obj)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default StockSlider;
