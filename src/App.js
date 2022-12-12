import React from "react";
import Header from "./Components/Header/header";
import Navigation from "./Components/Navigation/navigation";
import Slider from "./Components/Slider/slider";
import StockSlider from "./Components/StockSlider/stockSlider";
import Footer from "./Components/Footer/footer";
import "./App.css";

function App() {
  return (
    <div className="site-wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Navigation />
        <Slider />
        <StockSlider />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
