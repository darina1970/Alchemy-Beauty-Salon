import React from "react";
import { Link } from "react-router-dom";
import hair from "../../../../assets/icons/Services/hair.svg";
import brows from "../../../../assets/icons/Services/brows.svg";
import hands from "../../../../assets/icons/Services/hands.svg";
import sun from "../../../../assets/icons/Services/sun.svg";
import styles from "./Services.module.css";

const Services = ({ variant }) => {
  return (
    <section className={`section section-${variant}`}>
      <div className="container">
        <h2>Наши Услуги</h2>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={hair} className={styles.image} alt="Волосы" />
            <h3 className={styles.text}>Парикмахерские услуги</h3>
            <Link to="/services/hair"
              className={`btn-primary ${styles.button}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее
            </Link>
          </div>
          <div className={styles.card}>
            <img src={brows} className={styles.image} alt="Брови" />
            <h3 className={styles.text}>Бровист-ламимейкер</h3>
            <Link to="/services/look"
              className={`btn-primary ${styles.button}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее
            </Link>
          </div>
          <div className={styles.card}>
            <img src={hands} className={styles.image} alt="Руки" />
            <h3 className={styles.text}>Маникюр/Педикюр</h3>
            <Link to="/services/nails"
              className={`btn-primary ${styles.button}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее
            </Link>
          </div>
          <div className={styles.card}>
            <img src={sun} className={styles.image} alt="Солнце" />
            <h3 className={styles.text}>Солярий</h3>
            <Link to="/services/tan"
              className={`btn-primary ${styles.button}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
