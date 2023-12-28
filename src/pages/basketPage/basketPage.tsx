import BasketCard from "../../components/basketCard/basketCard";
import { Helmet } from "react-helmet-async";

type TBasketPageProps = {
  cartsArray: number[]
}

function BasketPage({ cartsArray }: TBasketPageProps) {
  console.log(cartsArray.length);  // ПОЧЕМУ ЗДЕСЬ ДЛИНА = 1 ????
  return (
    <>
      <Helmet>
        <title>Crocha - Корзина товаров</title>
      </Helmet>
      <div className="container">
        <div className="basket">
          <div className="basket-total flex">
            <div className="basket-total__product">
              <div className="basket-total__title">Корзина заказа</div>
              {
                cartsArray.length === 0 ?
                  cartsArray.map((product, index) => (
                    <BasketCard key={index} product={product} />
                  ))
                  :
                  <div>Пока ваша корзина пуста</div>
              }
            </div>
            <div className="basket-total__price">
              <div className="basket-total__title">Итого: 1797 ₽</div>
              <div className="basket-total__descr">
                <p className="total-descr">3 товара</p>
                <p className="total-descr">Сумма скидки: 360 ₽</p>
              </div>
              <button className="basket-total__button button-blue flex">Оформить заказ</button>
            </div>
          </div>
          <div className="basket-order"></div>
        </div>
      </div>;
    </>
  );
}

export default BasketPage;
