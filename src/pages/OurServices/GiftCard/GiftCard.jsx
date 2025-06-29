import React from "react";
import { Link } from "react-router-dom";
import styles from "./GiftCard.module.css";
import certificateImage from "../../../assets/images/Services/certificate.webp";

const GiftCard = () => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Подарочный сертификат</h2>
          <p className={styles.text}>
            Волшебство — лучший подарок. Дарите близким возможность превратиться с головы до пят в студии АЛХИМИЯ. И пусть их преображение начнётся с красивого жеста.
          </p>
          <img
            src={certificateImage}
            alt="Подарочный сертификат"
            className={styles.image}
          />
          <Link to="/gift" className={`btn-secondary ${styles.button}`}>
            Заказать сертификат
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
