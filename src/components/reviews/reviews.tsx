import goldStar from "../../../public/img/rating.png";
import noneStar from "../../../public/img/rating-none.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./reviewsStyle.scss";

import { reviews } from "../../mocks/reviews";

function renderStarRating(star: number) {
  const ratingStar = [];
  for (let i = 0; i < array.length; i++) {
    if (i < star) {
      ratingStar.push(<img src={goldStar}></img>);
    } else {
      ratingStar.push(<img src={noneStar}></img>);
    }
  }
  return ratingStar;
}

const array = Array(5).fill(<img src={noneStar}></img>);

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
                <img className="reviews-img" src={slide.img} alt="Фото" />
                <div className="reviews-name">{slide.name}</div>
                <div className="reviews-rating flex">
                  {renderStarRating(slide.rating).map((star, index) => (
                    <div className="reviews-star" key={index}>
                      {star}
                    </div>
                  ))}
                </div>
                <p className="reviews-descr">{slide.descr}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
