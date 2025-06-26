import React from "react";
import { Link } from "react-router-dom";
import nymph from "../../assets/images/ErrorPage/nymph.png";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nymphBlock}>
        <img src={nymph} alt="nymph" className={styles.image} />

        <div className={styles.textWrapper}>
          <p className={styles.text}>Комната не найдена.</p>
          <p className={styles.text}>Возможно, вы свернули не туда.</p>
          <p className={styles.text}>
            Но не волнуйтесь — я помогу вам найти путь к АЛХИМИИ красоты.
          </p>
        </div>
      </div>

      <Link to="/" className={styles.button}>
        вернуться на главную
      </Link>
    </div>
  );
};

export default ErrorPage;
