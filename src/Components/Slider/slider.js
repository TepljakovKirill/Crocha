import React from "react";
import "./slider.css";

function Slider() {
  return (
    <div className="container">
      <div className="slider-container">
        <h1>Акции</h1>
        <div className="slider flex">
          <div className="cart">
            <img src="./img/card-1.jpg" alt="" />
            <div className="cart-content">
              <p className="cart-title">Костюм для девочки</p>
              <div className="cart-price flex">
                <p className="cart-price__total">559 ₽</p>
                <p className="cart-price__old">719 ₽</p>
              </div>
              <div className="cart-button flex">
                <button className="button-watch">Смотреть</button>
                <button className="button-cart">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
