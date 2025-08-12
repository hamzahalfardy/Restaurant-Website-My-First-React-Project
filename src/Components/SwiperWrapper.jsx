import { Swiper } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules'; // ✅ Only import once
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 

export const SwiperWrapper = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]} // ✅ Correct order doesn't matter
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      effect="fade" // ✅ Proper way to use fade effect
      fadeEffect={{ crossFade: true }} // ✅ Optional: smoother fading
    >
      {children}
    </Swiper>
  );
};
