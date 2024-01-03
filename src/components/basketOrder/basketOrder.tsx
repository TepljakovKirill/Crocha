import { useSelector } from "react-redux";
import { RootState } from "../../redux/slices/store";


function BusketOrder() {
    const totalSumProduct = useSelector((state: RootState) => state.cart.totalSumProduct);
    const totalSumOrder = useSelector((state: RootState) => state.cart.totalSumOrder);

    return (
        <div className="basket-order">
            <div className="order-hr"></div>
            <div className="basket-order__title">Оформление заказа</div>
            <form id="order" className="basket-order__form" action="#">
                <div className="order-input__group flex">
                    <input type="text" name="order" placeholder="Имя" />
                    <input type="text" name="order" placeholder="Телефон" />
                    <input type="text" name="order" placeholder="Город" />
                    <textarea name="order" rows={5} cols={33} placeholder="Адрес"></textarea>
                </div>

                <div className="order-form__method flex">
                    <p className="method-title">Способ полуения:</p>

                    <input type="radio" name="delyvery" id="delyvery" value="Доставка" />
                    <label htmlFor="delyvery1">Доставка</label>

                    <input type="radio" name="delyvery" id="delyvery" value="Забрать в магазине" />
                    <label htmlFor="delyvery2">Забрать в магазине</label>
                </div>
                <div className="order-hr"></div>
                <div className="basket-total__order flex">
                    <div className="total-block">
                        <p className="total-sum">Сумма заказа: {totalSumProduct} ₽</p>
                        <p className="total-sum">Доставка: 500 ₽</p>
                        <p className="total-sum__finish">Итого: {totalSumOrder} ₽</p>
                    </div>
                    <div className="total-button flex">
                        <button className="button-grey total" type="submit" id="order">Продолжить покупки</button>
                        <button className="button-blue total" type="submit" id="order">Заказать</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BusketOrder; 