import { Link } from "react-router-dom";
import styles from "./Team.module.css";
import team1 from "../../../../assets/images/HomeImg/MastersImg/team1.webp";
import team2 from "../../../../assets/images/HomeImg/MastersImg/team2.webp";
import team3 from "../../../../assets/images/HomeImg/MastersImg/team3.webp";
import team4 from "../../../../assets/images/HomeImg/MastersImg/team4.webp";

const images = [team1, team2, team3, team4];

const Team = ({ variant }) => {
  return (
    <section className={`section section-${variant}`}>
      <div className={`container`}>
        <h2>Команда профессионалов</h2>
      </div>
      <div className={styles.fullWidth}>
        <div className={styles.wrapper}>
          <div className={styles.track}>
            {[...images, ...images].map((img, i) => (
              <div className={styles.slide} key={i}>
                <img src={img} alt={`team-${(i % images.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <Link to='/masters'
          className={`btn-primary ${styles.button}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Познакомиться с мастером
        </Link>
      </div>
    </section>
  );
};

export default Team;
