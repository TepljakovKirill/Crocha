import PromotionCard from "../promotionCard/promotionCard";

function Promotion() {
    return (
        <div className="promoton">
            <div className="container">
                <div className="promotion-contaner">
                    <div className="title-block">Акции</div>
                    <div className="promoton-block">
                        <PromotionCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;