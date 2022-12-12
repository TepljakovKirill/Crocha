import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Home from "./pages/home";
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
        <Route path="* " element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
