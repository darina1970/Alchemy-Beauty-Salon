import React from "react";
import fire from "../../../../assets/icons/WhyUsIcons/fire.svg";
import air from "../../../../assets/icons/WhyUsIcons/air.svg";
import water from "../../../../assets/icons/WhyUsIcons/water.svg";
import ground from "../../../../assets/icons/WhyUsIcons/ground.svg";
import styles from "./WhyUs.module.css";

const WhyUs = ({ variant }) => {
  return (
    <section className={`section section-${variant}`}>
      <div className="container">
        <h2>Почему Выбирают нас</h2>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={fire} className={styles.image} alt="Символ огня" />
            <p className={styles.text}>Вдохновение и стиль</p>
          </div>
          <div className={styles.card}>
            <img src={air} className={styles.image} alt="Символ воздуха" />
            <p className={styles.text}>Лёгкость и комфорт</p>
          </div>
          <div className={styles.card}>
            <img src={water} className={styles.image} alt="Символ воды" />
            <p className={styles.text}>Чистота и забота</p>
          </div>
          <div className={styles.card}>
            <img src={ground} className={styles.image} alt="Символ земли" />
            <p className={styles.text}>Устойчивость и Качество</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
