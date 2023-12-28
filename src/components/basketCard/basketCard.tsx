import CounterProduct from "../counterProduct/counterPrduct";
import { Card } from "../../types/types";

type TBasketCartProps = {
    product: Card;
}

function BasketCard({ product }: TBasketCartProps) {
    const { imageUrl, title, price, oldPrice } = product;
    return (
        <div className="basket-total__card flex">
            <div className="card-wrap flex">
                <img src={imageUrl} alt="Фото товара" />
                <div className="card-descr flex">
                    <p className="card-title">{title}</p>
                    <div className="card-price__block flex">
                        <p className="card-price__new">{price} ₽</p>
                        <p className="card-price__old">{oldPrice} ₽</p>
                    </div>
                    <p className="card-weight">Вес посылки 400 г.</p>
                </div>
            </div>
            <CounterProduct />
        </div>
    );
}

export default BasketCard;