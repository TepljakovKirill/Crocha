import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./reviewsStyle.scss";

import { reviews } from "../../mocks/reviews";

function Reviews() {
  return (
    <div className="product-reviews">
      <div className="product-reviews__title">Отзывы</div>
      <div className="product-reviews__block">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {reviews.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="reviews-img__block flex">
                <img
                  src="../../../public/img/reviews-img/reviews-1.jpg"
                  alt="Фото"
                />
                <div className="reviews-name">Антонина Семёновна</div>
                <p className="reviews-descr">
                  Купила в данном магазине летнее платье для дочки. Оставляю
                  отзыв после почти двух месяцев носки. Ребенок с радостью
                  надевал вещь, уж очень понравился принт и фасон. А мне
                  понравилось качество пошива, все швы аккуратные, ткань
                  приятная, хб, после нескольких стирок цвет не полинял.
                  Обязательно вернусь в этот интернет-магазин. С уважением,
                  Антонина.
                </p>
                <div className="reviews-rating">htqnbyu</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
