import React from "react";
import ShoppingCart from "./Components/ShoppingCart/shoppingCart";
import Header from "./Components/Header/header";
import Navigation from "./Components/Navigation/navigation";
import StockSlider from "./Components/StockSlider/stockSlider";
import Footer from "./Components/Footer/footer";
import "./App.css";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartShopping, setCartShopping] = React.useState([]);

  return (
    <div className="site-wrapper">
      <header>
        <Header onClickCart={() => setCartOpened(true)} />
      </header>
      <main>
        {cartOpened ? (
          <ShoppingCart
            totalCart={cartShopping}
            onCloseCart={() => setCartOpened(false)}
          />
        ) : null}
        <Navigation />
        <StockSlider />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
