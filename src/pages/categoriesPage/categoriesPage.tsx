import React from "react";
import { Helmet } from "react-helmet-async";

import CateoriesMenu from "../../components/categoresMenu/categoriesMenu";
import PromotionCard from "../../components/promotionCard/promotionCard";
// import ProductDetails from "../../components/productDetails/productDetails";


function Categories() {
    // const [visibleProduct, setVisibleProduct] = React.useState<boolean>(false);
    // const [cardId, setCardId] = React.useState<number>(0);
    // const [detailsProduct, setDetailsProduct] = React.useState<Array<Card>>([]);

    const [activeLink, setActiveLink] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://e5405e6585f75326.mokky.dev/card?${activeLink ? `category=${activeLink}` : ''}`)
            .then((res) => res.json())
            .then((arr) => {
                setCards(arr);
            });
    }, [activeLink]);

    function onClickLink(category: string) {
        setActiveLink(category);
    }


    // function onViewProduct(id: number) {
    //     setVisibleProduct(true);
    //     setCardId(id);
    // }

    // function onCloseProduct(): void {
    //     setVisibleProduct(false);
    // }
    return (
        <>
            <Helmet>
                <title>Crocha - Категории товаров</title>
            </Helmet>
            <div className="container">
                <div className="categories-block flex">
                    <div className="categories">
                        <CateoriesMenu activeLink={activeLink} onClickLink={onClickLink} />
                    </div>
                    <div className="productBlock flex">
                        <div className="cards-block">
                            {(cards.length > 0) ?
                                cards.map((card, i) => (
                                    <PromotionCard
                                        card={card}
                                        key={i}
                                    // onViewProduct={onViewProduct}
                                    />
                                )) :
                                <div className="cards-no">Товар отсутствует. Приносим свои извинения</div>}
                        </div>

                    </div>
                </div>

                {/* <ProductDetails /> // надо делать/еределать просмотр карточки товара */}

            </div>
        </>
    )
}

export default Categories;