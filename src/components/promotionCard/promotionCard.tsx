import { Card } from "../../types/types";

type promotionCardProps = {
    card: Card;
};


function PromotionCard({ card }: promotionCardProps) {
    const { imageUrl, title, price, oldPrice, discount, discountValue } = card;
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
                    <button className="button-grey">Смотреть</button>
                    <button className="button-blue">В корзину</button>
                </div>
            </div>
            {discount ? <div className="promotion-card--discount">-{discountValue}%</div> : ""}
        </div>
    );
}

export default PromotionCard;