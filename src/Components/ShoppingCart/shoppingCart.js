import React from "react";
import "./shoppingCart.css";

function ShoppingCart({ onCloseCart, totalCart = [] }) {
  const [count, setCount] = React.useState(1);
  const stopCount = () => {
    setCount(0);
  };

  return (
    <div className="overlay">
      <div className="shoppingCart">
        <div className="closeShoppingCart flex">
          <button onClick={onCloseCart} className="buttonCloseShoppingCart">
            x
          </button>
        </div>
        <div className="bascetTotal-Block flex">
          <div className="bascet-block">
            <div className="bascet">
              <p className="shoppingCart-title">Корзина заказа</p>
              {totalCart.map((item) => (
                <div className="bascetCart-wrap flex">
                  <div className="bascetCart flex">
                    <img
                      className="bascetCart-img"
                      src={item.imgUrl}
                      alt="Картинка"
                    />
                    <div className="bascetCart-descr">
                      <p className="basket-title">{item.title}</p>
                      <div className="bascet-price flex">
                        <p className="cart-price__total">{item.price} ₽</p>
                        <p className="cart-price__old">{item.oldPrice} ₽</p>
                      </div>
                      <p className="basket-weight">Вес посылки: 400 г.</p>
                    </div>
                  </div>
                  <div className="counter flex">
                    <p className="count">{count}</p>
                    <div className="button-arrow flex">
                      <button
                        onClick={() => setCount(count + 1)}
                        className="arrow-top"
                      >
                        <img src="./img/arrow-top.png" alt="Картинка" />
                      </button>
                      <button
                        onClick={
                          count > 0 ? () => setCount(count - 1) : stopCount
                        }
                        className="arrow-bottom"
                      >
                        <img src="./img/arrow-bottom.png" alt="Картинка" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
