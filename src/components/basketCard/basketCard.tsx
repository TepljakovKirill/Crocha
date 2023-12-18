import CounterProduct from "../counterProduct/counterPrduct";

function BasketCard() {
    return (
        <div className="basket-total__card flex">
            <div className="card-wrap flex">
                <img src="../../../public/img/basket-img.png" alt="Фото товара" />
                <div className="card-descr flex">
                    <p className="card-title">Платье для девочки</p>
                    <div className="card-price__block flex">
                        <p className="card-price__new">599 ₽</p>
                        <p className="card-price__old">719 ₽</p>
                    </div>
                    <p className="card-weight">Вес посылки 400 г.</p>
                </div>
            </div>
            <CounterProduct />
        </div>
    );
}

export default BasketCard;