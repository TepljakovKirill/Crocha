import React from "react";

import { setDeleteDiscount } from "../../redux/slices/cartSlice";
import { setTotalSumProduct } from "../../redux/slices/cartSlice";
import { setTotalSumDeleteProduct } from "../../redux/slices/cartSlice";
import { deleteCard } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";


type TProductProps = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  oldPrice: number;
};

type TBasketCartProps = {
  product: TProductProps;
};

function BasketCard({ product }: TBasketCartProps) {
  const dispatch = useDispatch();

<<<<<<< HEAD
    const { id, imageUrl, title, price, oldPrice } = product;

    const [count, setCount] = React.useState(1);

    function increment() {
        setCount(count + 1);
        dispatch(setTotalSumProduct(price));
    }

    function decrement() {
        if (count >= 2) {
            setCount(count - 1);
            dispatch(setTotalSumDeleteProduct());
        }
    }

    const removeCard = (id: number) => {
        dispatch(deleteCard(id));
        // dispatch(setTotalSumDeleteProduct(price));
        dispatch(setDeleteDiscount(price));
    }

    return (
        <div className="basket-total__card flex">
            <div className="card-wrap flex">
                <img src={imageUrl} alt="Фото товара" />
                <div className="card-descr flex">
                    <p className="card-title">{title}</p>
                    <div className="card-price__block flex">
                        <p className="card-price__new">{price * count} ₽</p>
                        {
                            oldPrice > 0 ? <p className="card-price__old">{oldPrice} ₽</p> : " "
                        }
                    </div>
                    <p className="card-weight">Вес посылки 400 г.</p>
                </div>
            </div>
            <div className="basket-total__counter flex">
                <p className="counter-number">{count}</p>
                <div className="counter-button flex">
                    <button onClick={increment} className="button-arrow flex"><img className="button-arrow__img" src="../../../public/img/arrow-top.png" alt="стрелка вверх" /></button>
                    <button onClick={decrement} className="button-arrow flex"><img className="button-arrow__img" src="../../../public/img/arrow-bottom.png" alt="стрелка вниз" /></button>
                </div>
            </div>
            <button onClick={() => removeCard(id)} className="basket-button">&times;</button>
=======
  const removeCard = (id: number) => {
    dispatch(deleteCard(id));
    dispatch(setTotalSumDeleteProduct(price));
    dispatch(setDeleteDiscount(price));
  };

  const { id, imageUrl, title, price, oldPrice } = product;

  return (
    <div className="basket-total__card flex">
      <div className="card-wrap flex">
        <img src={imageUrl} alt="Фото товара" />
        <div className="card-descr flex">
          <p className="card-title">{title}</p>
          <div className="card-price__block flex">
            <p className="card-price__new">{price} ₽</p>
            {oldPrice > 0 ? (
              <p className="card-price__old">{oldPrice} ₽</p>
            ) : (
              " "
            )}
          </div>
          <p className="card-weight">Вес посылки 400 г.</p>
>>>>>>> 73164c2a3b90f74998e968abbeec709b18a60d7b
        </div>
      </div>
      <CounterProduct />
      <button onClick={() => removeCard(id)} className="basket-button">
        &times;
      </button>
    </div>
  );
}

export default BasketCard;
