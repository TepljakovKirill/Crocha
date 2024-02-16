import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "../../types/types";
import Nav from "../../components/nav/nav";
import Bunner from "../../components/bunner/bunner";
import Promotion from "../../components/promotion/promotion";
import ProductDetails from "../../components/productDetails/productDetails";

function HomePage() {
  const [visibleProduct, setVisibleProduct] = React.useState<boolean>(false);
  const [cardId, setCardId] = React.useState<number>(0);

  const [detailsProduct, setDetailsProduct] = React.useState<Array<Card>>([]);

  React.useEffect(() => {
    fetch("https://e5405e6585f75326.mokky.dev/card")
      .then((res) => res.json())
      .then((arr) => {
        setDetailsProduct(arr);
      });
  }, []);

  function onViewProduct(id: number) {
    setVisibleProduct(true);
    setCardId(id);
  }

  function onCloseProduct(): void {
    setVisibleProduct(false);
  }
  return (
    <>
      <Helmet>
        <title>Crocha - Главная страница</title>
      </Helmet>
      <>
        <Nav />
        <Bunner />
        <Promotion />
        {visibleProduct ? (
          <ProductDetails
            onCloseProduct={onCloseProduct}
            cardId={cardId}
            detailsProduct={detailsProduct}
          />
        ) : (
          ""
        )}
      </>
    </>
  );
}

export default HomePage;
