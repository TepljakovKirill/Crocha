import React from "react";
import "./reviewsCart.css";

function ReviewsCart(id, imgUrl, name, star, dignity, limitations) {
  return (
    <div key={id} className="cart">
      <img src={imgUrl} alt="Картинка" />
      <div className="cartDescription">
        <p className="cartName">{name}</p>
        <div className="starBlok">
          <img src={star} alt="Картинка" />
        </div>
        <p>
          <span className="dignity">Достоинства:</span>
          {dignity}
        </p>
        <p>
          <span className="dignity">Недостатки:</span>
          {limitations}
        </p>
      </div>
    </div>
  );
}

export default ReviewsCart;
