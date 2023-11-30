import React from "react";
import { Helmet } from "react-helmet-async";

import Nav from "../../components/nav/nav";
import Bunner from "../../components/bunner/bunner";
import Promotion from "../../components/promotion/promotion";
import ProductDetails from "../../components/productDetails/productDetails";

function HomePage() {
  const [visibleProduct, setVisibleProduct] = React.useState<boolean>(true);

  function onOpenProduct(): void {
    setVisibleProduct(false);
  }

  function onCloseProduct(): void {
    setVisibleProduct(true);
  }
  return (
    <>
      <Helmet>
        <title>Croch - Главная страница</title>
      </Helmet>
      {visibleProduct ? (
        <div>
          <Nav />
          <Bunner />
          <Promotion onOpenProduct={onOpenProduct} />
        </div>
      ) : (
        <div>
          <>
            <Nav />
            <Bunner />
            <Promotion onOpenProduct={onOpenProduct} />
          </>
          <ProductDetails onCloseProduct={onCloseProduct} />
        </div>
      )}
    </>
  );
}

export default HomePage;
