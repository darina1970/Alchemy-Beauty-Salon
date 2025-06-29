import React from 'react';
import styles from './About.module.css';
import owner from "../../../../assets/images/HomeImg/AboutImg/owner.png";

const About = ({ variant }) => {
  return (
    <section className={`section section-${variant}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.mobileTitle}>
          <h2>О НАС</h2>
        </div>

        <div className={styles.textBlock}>
          <h2>О НАС</h2>

          <p className={styles.text}>
            АЛХИМИЯ — это не просто салон красоты, это настоящая бьюти-лаборатория, спрятанная под землей, где происходят волшебные превращения.
          </p>

          <p className={styles.text}>
            Наши мастера-алхимики создают красоту с вдохновением и заботой, используя профессиональные техники и капельку магии. Волосы, брови, ногти, загар — у нас всё превращается в искусство.
          </p>

          <p className={styles.text}>
            Здесь ты не просто приходишь на процедуру — ты попадаешь в мир, где обычное становится необыкновенным.
          </p>

          <p className={styles.text}>
            Добро пожаловать в АЛХИМИЮ — место, где красота рождается из волшебства.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={owner} alt="Основатель салона" className={styles.aboutImage} />
        </div>
      </div>
    </section>
  );
};

export default About;
