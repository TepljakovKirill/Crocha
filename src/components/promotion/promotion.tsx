import React from "react";
import PromotionCard from "../promotionCard/promotionCard";
import { cards } from "../../mocks/cards";



function Promotion() {
    // const [cards, setCards] = React.useState([]);

    // React.useEffect(() => {
    //     fetch('https://6561a5f3dcd355c0832404d3.mockapi.io/')
    //         .then((res) => {
    //             return res.json;
    //         })
    //         .then((arr) => {
    //             return setCards(arr);
    //         });
    // }, []);

    return (
        <div className="promoton">
            <div className="container">
                <div className="promotion-contaner">
                    <div className="title-block">Акции</div>
                    <div className="promoton-block">
                        {cards.map((card) => (
                            <PromotionCard card={card} key={card.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;