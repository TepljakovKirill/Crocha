import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-container flex">
        <ul className="flex">
          <li className="header-link">
            <Link to="/delivery">Оплата и доставка</Link>
          </li>
          <li className="header-link">
            <Link to="/reviews">Отзывы</Link>
          </li>
        </ul>
        <Link to="/">
          <img className="logo-link" src="./img/logo.svg" alt="logo" />
        </Link>
        <Link to="/cart">
          <img className="cart-link" src="./img/cart.svg" alt="cart" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
