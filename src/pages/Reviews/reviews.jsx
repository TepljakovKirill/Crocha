import React from "react";
import { dataReviews } from "./ReviewCart/dataReviews";
import ReviewsCart from "./ReviewCart/reviewsCart";
import "./reviews.css";

function Reviews() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="rewiews-container">
            <h1>Отзывы</h1>
            <div className="rating flex">
              <p className="rating-descr">Наш средний рейтинг 4.7</p>
              <div className="block-star">
                <img src="./img/star.png" alt="звёзды" />
              </div>
            </div>
            <div className="carts flex">
              {dataReviews.map((item) => (
                <ReviewsCart
                  key={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  star={item.star}
                  dignity={item.dignity}
                  limitations={item.limitations}
                />
              ))}
            </div>
            <div className="nameReviewsBlock">
              <div className="nameBlock">
                <p className="name">Наталья Иванова</p>
                <div className="blockStars">
                  <img src="./img/reviews-star.png" alt="звёзды" />
                </div>
                <p className="nameReviewsBlock-descr">
                  Заказывала сыну штанишки. Тонкие , лёгкие спортивные штаны ,
                  идут размер в размер, с запасом лучше не брать , на мальчика
                  100см взяла 110 размер , после стирки не сели , очень большие
                  складки внизу , но ничего страшного дорастёт, по позже будем
                  носить , а в целом для детского сада отлично подойдут!
                </p>
              </div>

              <div className="nameBlock">
                <p className="name">Анна Казакова</p>
                <div className="blockStars">
                  <img src="./img/reviews-star.png" alt="звёзды" />
                </div>
                <p className="nameReviewsBlock-descr">
                  Костюм очень понравился! Ткань приятная, на худенького
                  мальчика просто замечательно. Обычно проблема подобрать штаны,
                  все сваливается, даже на завязках. Я в восторге! Смотрится
                  очень хорошо. А сын в восторге от машин на кофте!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reviews;
