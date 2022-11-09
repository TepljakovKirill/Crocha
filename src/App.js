import React from "react";
import Header from "./Components/Header/header";
import Navigation from "./Components/Navigation/navigation";
import StockSlider from "./Components/StockSlider/stockSlider";
import "./App.css";

function App() {
  return (
    <div className="site-wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Navigation />
        <StockSlider />
      </main>
    </div>
  );
}

export default App;
