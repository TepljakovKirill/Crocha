import React from "react";
import PromotionCard from "../promotionCard/promotionCard";
import { Card } from "../../types/types";

type TPromotionProps = {
  onViewProduct: (id: number) => number;
};

function Promotion({ onViewProduct }: TPromotionProps) {
  const [cards, setCards] = React.useState<Array<Card>>([]);

  React.useEffect(() => {
    fetch("https://6561a5f3dcd355c0832404d3.mockapi.io/card")
      .then((res) => res.json())
      .then((arr) => {
        setCards(arr);
      });
  }, []);

  return (
    <div className="promoton">
      <div className="container">
        <div className="promotion-contaner">
          <div className="title-block">Акции</div>
          <div className="promoton-block">
            {cards.map((card) => (
              <PromotionCard
                onViewProduct={onViewProduct}
                card={card}
                key={card.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
