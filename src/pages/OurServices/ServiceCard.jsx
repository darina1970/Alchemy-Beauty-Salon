import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ variant, title, description, image, path }) => {
  return (
    <div className={`section section-${variant}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.titleMobile}>{title}</h2>
          <img src={image} className={styles.image} alt={title} />
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Link to={path} className={`btn-secondary ${styles.button}`}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
