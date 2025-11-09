import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      <SwiperSlide>
        <img src="https://picsum.photos/800/300?random=1" style={styles.img} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/800/300?random=2" style={styles.img} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/800/300?random=3" style={styles.img} />
      </SwiperSlide>
    </Swiper>
  );
}

const styles = {
  img: { width: "100%", height: "280px", objectFit: "cover", borderRadius: "8px" }
};

export default Slider;
