import CounterProduct from "../counterProduct/counterPrduct";

import { setDeleteDiscount } from "../../redux/slices/cartSlice";
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
