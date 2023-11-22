import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./bunnerStyle.scss";
import { imgSlide } from "../../mocks/imgSlide";

function Bunner() {
  return (
    <div className="container">
      <div className="swiper-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          autoplay={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
        >
          {imgSlide.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.img} alt="Слайд" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Bunner;
