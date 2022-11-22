import React from "react";
import "./cart.css";

function Cart({ id, imgUrl, title, price, oldPrice, addToCart }) {
  const clickToCart = () => {
    addToCart({ id, imgUrl, title, price, oldPrice });
  };

  return (
    <div key={id} className="cart">
      <img src={imgUrl} alt="Картинка" />
      <div className="cart-content">
        <p className="cart-title">{title}</p>
        <div className="cart-price flex">
          <p className="cart-price__total">{price} ₽</p>
          <p className="cart-price__old">{oldPrice ? oldPrice : " "} ₽</p>
        </div>
        <div className="cart-button flex">
          <button className="button-watch">Смотреть</button>
          <button onClick={clickToCart} className="button-cart">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
