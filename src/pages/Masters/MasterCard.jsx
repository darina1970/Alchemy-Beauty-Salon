import React from 'react';
import styles from './MasterCard.module.css';
import star from '../../assets/icons/MastersPage/magicwand.svg';

const MasterCard = ({ variant, name, description, title, content, image, links }) => {
  return (
    <div className={`section section-${variant}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={name} className={styles.image} />
          </div>

          <div className={styles.content}>
            <div className={styles.header}>
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.text}>{description}</p>
              <h2 className={styles.experience}>{title}</h2>
            </div>

            <div className={styles.info}>
              {content.map((item, i) => {
                if (item.type === 'paragraph') {
                  return (
                    <div key={i} className={styles.row}>
                      <img src={star} alt="иконка" className={styles.icon} />
                      <p className={styles.text}>{item.text}</p>
                    </div>
                  );
                }

                if (item.type === 'title') {
                  return <p key={i} className={styles.text}>{item.text}</p>;
                }

                if (item.type === 'quote') {
                  return <blockquote key={i} className={styles.quote}>“{item.text}”</blockquote>;
                }

                return null;
              })}
            </div>

            <div className={styles.buttons}>
              <a
                href="https://dikidi.net/ru/profile/laboratoriya_krasoty_alximiya_1640050"
                target="_blank"
                rel="noreferrer"
                className={`btn-secondary ${styles.button}`}
              >
                Онлайн-запись
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`btn-secondary ${styles.button}`}
              >
                Задать вопрос
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
