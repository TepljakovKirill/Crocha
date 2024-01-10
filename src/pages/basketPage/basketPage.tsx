import BasketCard from "../../components/basketCard/basketCard";
import BusketOrder from "../../components/basketOrder/basketOrder";
import { Helmet } from "react-helmet-async";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/slices/store";

function BasketPage() {
  const carts = useSelector((state: RootState) => state.cart.carts);
  const totalProduct = carts.length;

  const totalSumProduct = useSelector(
    (state: RootState) => state.cart.totalSumProduct
  );

  let discountPrice;
  totalSumProduct >= 3000 ? (discountPrice = 360) : (discountPrice = 0);

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
              {carts.length === 0 ? (
                <div>Пока ваша корзина пуста</div>
              ) : (
                carts.map((product) => (
                  <BasketCard key={product.id} product={product} />
                ))
              )}
            </div>
            <div className="basket-total__price">
              <div className="basket-total__title">
                Итого: {totalSumProduct} ₽
              </div>
              <div className="basket-total__descr">
                <p className="total-descr">{totalProduct} товара</p>
                <p className="total-descr">Сумма скидки: {discountPrice} ₽</p>
              </div>
              <button className="basket-total__button button-blue flex">
                Оформить заказ
              </button>
            </div>
          </div>
          <BusketOrder />
        </div>
      </div>
      ;
    </>
  );
}

export default BasketPage;
