import React, { useRef, useState, useEffect } from "react";
import styles from "./Reviews.module.css";

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

const reviews = [
  review1, review2, review3, review4, review5,
  review6, review7, review8, review9, review10,
];

const Reviews = ({ variant }) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const slideWidth = el.offsetWidth;
    const index = Math.round(el.scrollLeft / slideWidth);
    setActiveSlide(index);
  };

  const scrollTo = (direction) => {
    const el = carouselRef.current;
    if (!el) return;

    const width = el.offsetWidth;
    el.scrollBy({ left: direction * width, behavior: "smooth" });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`section section-${variant} ${styles.reviewsSection}`}>
      <div className={`container ${styles.reviewsContainer}`}>
        <h2>ОТЗЫВЫ</h2>

        {!isMobile && (
          <div className={styles.arrowsWrapper}>
            <button className={styles.arrow} onClick={() => scrollTo(-1)}>
              <img src={arrowLeft} alt="Назад" />
            </button>
            <button className={styles.arrow} onClick={() => scrollTo(1)}>
              <img src={arrowRight} alt="Вперед" />
            </button>
          </div>
        )}

        <div className={styles.carousel} ref={carouselRef}>
          {reviews.map((img, i) => (
            <div className={styles.slide} key={i}>
              <img src={img} alt={`Отзыв ${i + 1}`} className={styles.reviewImage} />
            </div>
          ))}
        </div>

        {isMobile && (
          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <span key={i} className={`${styles.dot} ${i === activeSlide ? styles.active : ""}`} />
            ))}
          </div>
        )}

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
