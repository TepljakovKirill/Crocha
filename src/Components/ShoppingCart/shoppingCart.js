import React from "react";
import "./shoppingCart.css";

function ShoppingCart() {
  return (
    <div className="overlay">
      <div className="shoppingCart">
        <div className="bascetTotal-Block flex">
          <div className="bascet">
            <p className="shoppingCart-title">Корзина заказа</p>
            <div className="bascetCart-wrap flex">
              <div className="bascetCart flex">
                <img
                  className="bascetCart-img"
                  src="./img/card-1.jpg"
                  alt="Картинка"
                />
                <div className="bascetCart-descr">
                  <p className="basket-title">Платье для девочки</p>
                  <div className="bascet-price flex">
                    <p className="cart-price__total">599 ₽</p>
                    <p className="cart-price__old">719 ₽</p>
                  </div>
                  <p className="basket-weight">Вес посылки: 400 г.</p>
                </div>
              </div>
              <div className="counter flex">
                <p className="count">1</p>
                <div className="button-arrow flex">
                  <button className="arrow-top">
                    <img src="./img/arrow-top.png" alt="Картинка" />
                  </button>
                  <button className="arrow-bottom">
                    <img src="./img/arrow-bottom.png" alt="Картинка" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bascetCart-wrap flex">
              <div className="bascetCart flex">
                <img
                  className="bascetCart-img"
                  src="./img/card-1.jpg"
                  alt="Картинка"
                />
                <div className="bascetCart-descr">
                  <p className="basket-title">Платье для девочки</p>
                  <div className="bascet-price flex">
                    <p className="cart-price__total">599 ₽</p>
                    <p className="cart-price__old">719 ₽</p>
                  </div>
                  <p className="basket-weight">Вес посылки: 400 г.</p>
                </div>
              </div>
              <div className="counter flex">
                <p className="count">1</p>
                <div className="button-arrow flex">
                  <button className="arrow-top">
                    <img src="./img/arrow-top.png" alt="Картинка" />
                  </button>
                  <button className="arrow-bottom">
                    <img src="./img/arrow-bottom.png" alt="Картинка" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bascetTotal">
            <p className="shoppingCart-title">Итого: 1797 ₽</p>
            <div className="bascetTotal-descr">
              <p className="basket-title">3 товара</p>
              <p className="bascetTotal-discont">Сумма скидки: 360 ₽</p>
            </div>
            <div className="bascetTotal-button flex">
              <button className="button-cart">Оформить заказ</button>
            </div>
          </div>
        </div>
        <div className="order-block">
          <p className="shoppingCart-title">Оформление заказа</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
