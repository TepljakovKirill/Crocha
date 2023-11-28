type TProductDetailsProps = {
    onCloseProduct: boolean;
}

function ProductDetails({ onCloseProduct }: TProductDetailsProps) {
    return (
        <div className="overlay">
            <div className="product">
                <div className="product-block flex">
                    <div className="product-block__img">
                        <img src="../../../public/img/product-1.jpg" alt="Фото товара" />
                    </div>
                    <div className="product-block__descr flex">
                        <p className="product-block__title">Платье с цветочным узором</p>
                        <div className="product-block__price flex">
                            <div className="product-price">899 ₽</div>
                            <div className="product-price__old">839 ₽</div>
                        </div>
                        <div className="product-block__line"></div>
                        <input type="text" placeholder="Размер 1" />
                        <button className="product-button">В корзину</button>
                        <div className="product-description">
                            <p className="product-description__title">Описание:</p>
                            <p className="product-description__descr">Описание: Платье Bossa Nova выполнено из эластичного супрема.
                                Детали: застежка на кнопку на спине, завышенная талия, оборка по низу изделия, укороченный рукав.
                                В составе платья 100% хлопок.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-reviews">
                    <div className="product-reviews__title">Отзывы</div>
                    <div className="product-reviews__block">
                        <div className="reviews">
                            <img src="../../../public/img/product-reviews.jpg" alt="Фото отзыва" />
                        </div>
                    </div>
                </div>
                <button onClick={onCloseProduct} className="product-close__button">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="13.9824" y="-0.0355835" width="3.51909" height="19.7239" rx="1.75954" transform="rotate(45 13.9824 -0.0355835)" fill="#00A9C8" />
                        <rect y="2.48837" width="3.51909" height="19.7239" rx="1.75954" transform="rotate(-45 0 2.48837)" fill="#00A9C8" />
                    </svg>
                </button>
            </div>
        </div>

    );
}

export default ProductDetails;