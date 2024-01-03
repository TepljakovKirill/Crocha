import { Card } from "../../types/types";

import { useDispatch } from "react-redux";
import { setCarts } from "../../redux/slices/cartSlice";
import { setTotalSumProduct } from "../../redux/slices/cartSlice";
import { setDiscount } from "../../redux/slices/cartSlice";

type TPromotionCardProps = {
  card: Card;
  onViewProduct: (id: number) => void;
};

type TCardProps = {
  id: number,
  imageUrl: string,
  title: string,
  price: number,
  oldPrice: number
}


function PromotionCard({ card, onViewProduct }: TPromotionCardProps) {
  const dispatch = useDispatch();

  const onClickButtonCart = ({ id, imageUrl, title, price, oldPrice }: TCardProps) => {
    dispatch(setCarts({ id, imageUrl, title, price, oldPrice }));
    dispatch(setTotalSumProduct(price));
    dispatch(setDiscount(price));
  }



  const { id, imageUrl, title, price, oldPrice, discount, discountValue } =
    card;
  return (
    <div className="promotion-card">
      <img src={imageUrl} alt="Фото товара" />
      <div className="card-descr">
        <p className="card-title">{title}</p>
        <div className="card-price__block flex">
          <p className="card-price">{price} ₽</p>
          {oldPrice > 0 ? <p className="card-price__old">{oldPrice} ₽</p> : " "}
        </div>
        <div className="card-button__block flex">
          <button onClick={() => onViewProduct(id)} className="button-grey">
            Смотреть
          </button>
          <button onClick={() => onClickButtonCart({ id, imageUrl, title, price, oldPrice })} className="button-blue">В корзину</button>
        </div>
      </div>
      {discount ? (
        <div className="promotion-card--discount">-{discountValue}%</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PromotionCard;
