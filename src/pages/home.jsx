import React from "react";
import Navigation from "../Components/Navigation/navigation";
import Slider from "../Components/Slider/slider";
import StockSlider from "../Components/StockSlider/stockSlider";
import Footer from "../Components/Footer/footer";

function Home() {
  return (
    <div>
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

export default Home;
