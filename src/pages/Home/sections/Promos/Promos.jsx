import styles from "./Promos.module.css";
import stars from "../../../../assets/icons/promos/stars.svg";

const Promos = ({ variant }) => (
  <section id="promos" className={styles.promos}>
    <div className={styles.imageWrapper} />
    <div className={`section-${variant} ${styles.promosContent}`}>
      <div className={`container ${styles.blockWrapper}`}>
        <div className={styles.textBlock}>
          <div className={styles.titleBlock}>
            <img className={styles.promosStars} src={stars} alt="stars" />
            <h2 className={styles.title}>
              волшебные акции — ещё больше красоты
            </h2>
          </div>
          <div className={styles.promosDescription}>
            <p className={styles.promosParagraph}>
              У нас всегда есть <span>особые</span> предложения, которые сделают
              ваше посещение ещё приятнее!
            </p>
            <p className={styles.promosParagraph}>
              Подарите себе немного магии — с <span>заботой</span> и
              <span>выгодой</span>.
            </p>
            <p className={styles.promosNote}>
              *Уточняйте условия и сроки проведения акций у администратора.
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/79137835046"
          className={`btn-primary ${styles.button}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          узнать про акции
        </a>
      </div>
    </div>
  </section>
);

export default Promos;
