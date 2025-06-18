import React, { useRef } from "react";
import styles from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import review1 from "/src/assets/images/HomeImg/Reviews/review1.webp";
import review2 from "/src/assets/images/HomeImg/Reviews/review2.webp";
import review3 from "/src/assets/images/HomeImg/Reviews/review3.webp";
import review4 from "/src/assets/images/HomeImg/Reviews/review4.webp";
import review5 from "/src/assets/images/HomeImg/Reviews/review5.webp";
import review6 from "/src/assets/images/HomeImg/Reviews/review6.webp";
import review7 from "/src/assets/images/HomeImg/Reviews/review7.webp";
import review8 from "/src/assets/images/HomeImg/Reviews/review8.webp";
import review9 from "/src/assets/images/HomeImg/Reviews/review9.webp";
import review10 from "/src/assets/images/HomeImg/Reviews/review10.webp";

import yandexIcon from "/src/assets/icons/reviews/yandex.svg";
import gisIcon from "/src/assets/icons/reviews/2gis.svg";
import arrowLeft from "/src/assets/icons/arrows/left.svg";
import arrowRight from "/src/assets/icons/arrows/right.svg";

const Reviews = ({ variant }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={`section section-${variant} ${styles.reviewsSection}`}>
      <div className={`container ${styles.reviewsContainer}`}>
        <h2>ОТЗЫВЫ</h2>

        <div className={styles.arrowsWrapper}>
          <button ref={prevRef} className={`${styles.arrow} ${styles.prevArrow}`}>
            <img src={arrowLeft} alt="Назад" />
          </button>
          <button ref={nextRef} className={`${styles.arrow} ${styles.nextArrow}`}>
            <img src={arrowRight} alt="Вперёд" />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          className={styles.swiperWrapper}
        >
          {[review1, review2, review3, review4, review5, review6, review7, review8, review9, review10].map(
            (img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`Отзыв ${i + 1}`} className={styles.reviewImage} />
              </SwiperSlide>
            )
          )}
        </Swiper>

        <p className={styles.reviewText}>БЛАГОДАРЯ ВАМ МЫ СТАНОВИМСЯ ЕЩЁ ЛУЧШЕ!</p>

        <div className={styles.linkButtons}>
          <a href="https://2gis.ru" target="_blank" rel="noreferrer">
            <img src={gisIcon} alt="Отзывы на 2GIS" className={styles.linkIcon} />
          </a>
          <a href="https://yandex.ru" target="_blank" rel="noreferrer">
            <img src={yandexIcon} alt="Отзывы на Яндекс" className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
