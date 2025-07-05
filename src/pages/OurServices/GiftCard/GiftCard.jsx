import React from "react";
import styles from "./GiftCard.module.css";
import certificateImage from "../../../assets/images/Services/certificate.webp";

const GiftCard = () => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Подарочный сертификат</h2>
          <p className={styles.text}>
            Подарите себе и близким заботу, красоту и волшебство — выберите сертификат на любую услугу салона «Алхимия».
          </p>
          <img
            src={certificateImage}
            alt="Подарочный сертификат"
            className={styles.image}
          />
          <a
            href="https://wa.me/79137835046?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20подарочном%20сертификате."
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-secondary ${styles.button}`}
            >
            Заказать сертификат
          </a>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
