import React, { useRef, useEffect } from "react";
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

const reviews = [
  review1, review2, review3, review4, review5,
  review6, review7, review8, review9, review10,
];

const Reviews = ({ variant }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.classList.add(styles.dragging);
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2.5;
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove(styles.dragging);
    };

    const onMouseLeave = onMouseUp;

    const onTouchStart = (e) => {
      isDown = true;
      el.classList.add(styles.dragging);
      startX = e.touches[0].pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startX) * 2.5;
      el.scrollLeft = scrollLeft - walk;
    };

    const onTouchEnd = () => {
      isDown = false;
      el.classList.remove(styles.dragging);
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section className={`section section-${variant} ${styles.reviewsSection}`}>
      <div className={`container ${styles.reviewsContainer}`}>
        <h2>ОТЗЫВЫ</h2>

        <div className={styles.carousel} ref={carouselRef}>
          {reviews.map((img, i) => (
            <div key={i} className={styles.slide}>
              <img src={img} alt={`Отзыв ${i + 1}`} className={styles.reviewImage} draggable={false} />
            </div>
          ))}
        </div>

        <p className={styles.reviewText}>БЛАГОДАРЯ ВАМ МЫ СТАНОВИМСЯ ЕЩЁ ЛУЧШЕ!</p>

        <div className={styles.linkButtons}>
          <a href="https://2gis.ru" target="_blank" rel="noreferrer">
            <img src={gisIcon} alt="2GIS" className={styles.linkIcon} />
          </a>
          <a href="https://yandex.ru" target="_blank" rel="noreferrer">
            <img src={yandexIcon} alt="Яндекс" className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
