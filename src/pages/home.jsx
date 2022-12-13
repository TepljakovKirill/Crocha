import React from "react";
import Navigation from "../Components/Navigation/navigation";
import Slider from "../Components/Slider/slider";
import StockSlider from "../Components/StockSlider/stockSlider";

function Home() {
  return (
    <div>
      <main>
        <Navigation />
        <Slider />
        <StockSlider />
      </main>
    </div>
  );
}

export default Home;
