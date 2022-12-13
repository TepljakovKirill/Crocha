import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Home from "./pages/home";
import Delivery from "./pages/delivery";
import Reviews from "./pages/reviews";
import Footer from "./Components/Footer/footer";
import NotFound from "./pages/notFound";
import "./App.css";

function App() {
  return (
    <div className="site-wrapper">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
