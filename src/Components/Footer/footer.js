import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container flex">
          <a className="logo-link" href="#">
            <img src="./img/logo.svg" alt="logo" />
          </a>
          <p className="footer-descr">
            Руководитель организации: генеральный директор Давыдова Мария
            Сергеевна. Юридический адрес ПАО "Детский Мир" - 119415, город
            Москва, проспект Вернадского, 37-3. Организации ПУБЛИЧНОЕ
            АКЦИОНЕРНОЕ ОБЩЕСТВО "ДЕТСКИЙ МИР" присвоены ИНН 7729355029, ОГРН
            1027700047100, ОКПО 47568073.
          </p>
          <div className="footer-social flex">
            <a className="instagramm" href="#">
              <img src="./img/social.svg" alt="social" />
            </a>
            <a className="instagramm" href="#">
              <img src="./img/social.svg" alt="social" />
            </a>
            <a className="instagramm" href="#">
              <img src="./img/social.svg" alt="social" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
