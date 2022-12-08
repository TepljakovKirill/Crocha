import React from "react";
import "./navigation.css";

function Navigation() {
  return (
    <div className="container">
      <nav>
        <ul className="navigation-list flex">
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              Одежда
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              Обувь
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              Аксессуары
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              Скидки
            </a>
          </li>
        </ul>
      </nav>
      <img className="navigation-bunner" src="./img/bunner.jpg" alt="cart" />
    </div>
  );
}

export default Navigation;
