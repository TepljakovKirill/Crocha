import Header from "./Components/Header/header";
import Navigation from "./Components/Navigation/navigation";
import Slider from "./Components/Slider/slider";
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
      </main>
    </div>
  );
}

export default App;
