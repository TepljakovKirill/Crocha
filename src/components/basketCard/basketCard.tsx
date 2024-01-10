import { setDiscount } from "../../redux/slices/cartSlice";
import { increment } from "../../redux/slices/cartSlice";
import { decrement } from "../../redux/slices/cartSlice";
import { deleteCard } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

type TProductProps = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  oldPrice: number;
  count: number;
};

type TBasketCartProps = {
  product: TProductProps;
};

function BasketCard({ product }: TBasketCartProps) {
  const dispatch = useDispatch();

  const { id, imageUrl, title, price, oldPrice, count } = product;

  const onClickPlus = () => {
    dispatch(increment(id));
    dispatch(setDiscount());
  };

  const onClickMinus = () => {
    dispatch(decrement({ id, price }));
    dispatch(setDiscount());
  };

  const removeCard = (id: number) => {
    dispatch(deleteCard(id));
    dispatch(setDiscount());
  };

  return (
    <div className="basket-total__card flex">
      <div className="card-wrap flex">
        <img src={imageUrl} alt="Фото товара" />
        <div className="card-descr flex">
          <p className="card-title">{title}</p>
          <div className="card-price__block flex">
            <p className="card-price__new">{price * count} ₽</p>
            {oldPrice > 0 ? (
              <p className="card-price__old">{oldPrice} ₽</p>
            ) : (
              " "
            )}
          </div>
          <p className="card-weight">Вес посылки 400 г.</p>
        </div>
      </div>
      <div className="basket-total__counter flex">
        <p className="counter-number">{count}</p>
        <div className="counter-button flex">
          <button onClick={onClickPlus} className="button-arrow flex">
            <img
              className="button-arrow__img"
              src="../../../public/img/arrow-top.png"
              alt="стрелка вверх"
            />
          </button>
          <button onClick={onClickMinus} className="button-arrow flex">
            <img
              className="button-arrow__img"
              src="../../../public/img/arrow-bottom.png"
              alt="стрелка вниз"
            />
          </button>
        </div>
      </div>
      <button onClick={() => removeCard(id)} className="basket-button">
        &times;
      </button>
    </div>
  );
}

export default BasketCard;
