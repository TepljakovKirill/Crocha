function PromotionCard() {
    return (
        <div className="promotion-card">
            <img src="../.././../public/img/card-1.jpg" alt="Фото товара" />
            <div className="card-descr">
                <p className="card-title">Костюм для девочки</p>
                <div className="card-price__block flex">
                    <p className="card-price">599 ₽</p>
                    <p className="card-price__old">719 ₽</p>
                </div>
                <div className="card-button__block flex">
                    <button className="button-grey">Смотреть</button>
                    <button className="button-blue">В корзину</button>
                </div>
            </div>
            <div className="promotion-card--discount">-20%</div>
        </div>
    );
}

export default PromotionCard;