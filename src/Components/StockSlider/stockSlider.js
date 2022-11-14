import React from "react";
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

  return (
    <div className="container">
      <div className="slider-container">
        <h1>Акции</h1>
        <Slider {...settings}>
          {dataCartStock.map((item) => (
            <div className="cart">
              <img src={item.imgUrl} alt="Картинка" />
              <div className="cart-content">
                <p className="cart-title">{item.title}</p>
                <div className="cart-price flex">
                  <p className="cart-price__total">{item.price} ₽</p>
                  <p className="cart-price__old">
                    {item.oldPrice ? item.oldPrice : " "} ₽
                  </p>
                </div>
                <div className="cart-button flex">
                  <button className="button-watch">Смотреть</button>
                  <button className="button-cart">В корзину</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default StockSlider;
