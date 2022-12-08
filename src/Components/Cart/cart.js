import React from "react";
import "./cart.css";

function Cart({ id, imgUrl, title, price, oldPrice, discount }) {
  return (
    <div key={id} className="cart">
      <div className="img-cart">
        {discount ? <p className="discount flex">-{discount}%</p> : ""}
        <img src={imgUrl} alt="Картинка" />
      </div>

      <div className="cart-content">
        <p className="cart-title">{title}</p>
        <div className="cart-price flex">
          <p className="cart-price__total">{price} ₽</p>
          {oldPrice ? <p className="cart-price__old">{oldPrice} ₽</p> : ""}
        </div>
        <div className="cart-button flex">
          <button className="button-watch">Смотреть</button>
          <button className="button-cart">В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
