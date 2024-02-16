import React from "react";
import Reviews from "../reviews/reviews";
import { Card } from "../../types/types";
import { TCardProps } from "../promotionCard/promotionCard";
import { useDispatch } from "react-redux";
import { setCarts } from "../../redux/slices/cartSlice";
import { setDiscount } from "../../redux/slices/cartSlice";

type TProductDetailsProps = {
  onCloseProduct: () => void;
  cardId: number;
  detailsProduct: Card[];
};

function ProductDetails({
  onCloseProduct,
  cardId,
  detailsProduct,
}: TProductDetailsProps) {
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = React.useState("Размер 1");
  const arrayDetail = detailsProduct[cardId - 1];

  const { id, imageUrl, title, price, oldPrice } = arrayDetail;

  const onClickButtonCart = ({
    id,
    imageUrl,
    title,
    price,
    oldPrice,
  }: TCardProps) => {
    dispatch(setCarts({ id, imageUrl, title, price, oldPrice }));
    dispatch(setDiscount());
  };

  return (
    <div className="overlay">
      <div className="product">
        <div className="product-block flex">
          <div className="product-block__img">
            <img src={imageUrl} alt="Фото товара" />
          </div>
          <div className="product-block__descr flex">
            <p className="product-block__title">{title}</p>
            <div className="product-block__price flex">
              <div className="product-price">{price} ₽</div>
              {oldPrice > 0 ? (
                <div className="product-price__old">{oldPrice} ₽</div>
              ) : (
                ""
              )}
            </div>
            <div className="product-block__line"></div>

            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              name="selectSize"
              className="product-select"
            >
              <option value="size-1">Размер 1</option>
              <option value="size-2">Размер 2</option>
              <option value="size-3">Размер 3</option>
            </select>

            <button
              className="product-button"
              onClick={() =>
                onClickButtonCart({ id, imageUrl, title, price, oldPrice })
              }
            >
              В корзину
            </button>
            <div className="product-description">
              <p className="product-description__title">Описание:</p>
              <p className="product-description__descr">
                Описание: Платье Bossa Nova выполнено из эластичного супрема.
                Детали: застежка на кнопку на спине, завышенная талия, оборка по
                низу изделия, укороченный рукав. В составе платья 100% хлопок.
              </p>
            </div>
          </div>
        </div>
        <Reviews />
        <button onClick={onCloseProduct} className="product-close__button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="13.9824"
              y="-0.0355835"
              width="3.51909"
              height="19.7239"
              rx="1.75954"
              transform="rotate(45 13.9824 -0.0355835)"
              fill="#00A9C8"
            />
            <rect
              y="2.48837"
              width="3.51909"
              height="19.7239"
              rx="1.75954"
              transform="rotate(-45 0 2.48837)"
              fill="#00A9C8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
