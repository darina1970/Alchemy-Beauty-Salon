import styles from "../Sterilization/Sterilization.module.css";
import mf from "../../../../assets/images/Rooms/RoomNails/Sterilization/mf.webp";
import number1 from "../../../../assets/icons/sterilization/number1.svg";
import number2 from "../../../../assets/icons/sterilization/number2.svg";
import number3 from "../../../../assets/icons/sterilization/number3.svg";
import number4 from "../../../../assets/icons/sterilization/number4.svg";
import number5 from "../../../../assets/icons/sterilization/number5.svg";

const sterilizationSteps = [
  {
    id: 1,
    icon: number1,
    title: "Обработка в дезрастворе",
    description:
      "Все инструменты замачиваются в стоматологическом дезрастворе, имеющем сертификат качества.",
  },
  {
    id: 2,
    icon: number2,
    title: "Промывка под проточной водой",
    description:
      "Все инструменты тщательно промываются под проточной водой для полной очистки от дезсредств.",
  },
  {
    id: 3,
    icon: number3,
    title: "Полная сушка",
    description:
      "Инструменты тщательно просушиваются перед термической обработкой.",
  },
  {
    id: 4,
    icon: number4,
    title: "Термическая стерилизация",
    description:
      "Производится в сухожаре ГП. Каждый инструмент запаивается в индивидуальный крафт-пакет с индикатором стерильности и стерилизуется при высокой температуре.",
  },
  {
    id: 5,
    icon: number5,
    title: "Хранение в УФ-шкафу",
    description:
      "Стерильные инструменты хранятся в бактерицидном УФ-шкафу до использования.",
  },
];

const Sterilization = () => {
  return (
    <div className={`section ${styles.sterilization}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>алхимия стерильной чистоты</h2>
          <p className={styles.subtitle}>
            Каждый инструмент проходит 5 ступеней стерилизации — для вашей
            безопасности и нашей уверенности
          </p>
        </div>
        <div className={styles.content}>
          {sterilizationSteps.map((step) => (
            <div key={step.id} className={styles.steps}>
              <div className={styles.step}>
                <img src={step.icon} alt={`Шаг ${step.id}`} />
                <h2 className={styles.stepTitle}>{step.title}</h2>
              </div>
              <div className={styles.stepDescription}>
                <p className={styles.stepSubtitle}>{step.description}</p>
              </div>
            </div>
          ))}

          <div className={styles.images}>
            <img src={mf} alt="Процесс стерилизации" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sterilization;

/*import styles from "../Sterilization/Sterilization.module.css";
import mf from "../../../../assets/images/Rooms/RoomNails/Sterilization/mf.webp";
import number1 from "../../../../assets/icons/sterilization/number1.svg";
import number2 from "../../../../assets/icons/sterilization/number2.svg";
import number3 from "../../../../assets/icons/sterilization/number3.svg";
import number4 from "../../../../assets/icons/sterilization/number4.svg";
import number5 from "../../../../assets/icons/sterilization/number5.svg";

const sterilizationSteps = [
  {
    id: 1,
    icon: number1,
    title: "Обработка в дезрастворе",
    description:
      "Все инструменты замачиваются в стоматологическом дезрастворе, имеющем сертификат качества.",
  },
  {
    id: 2,
    icon: number2,
    title: "Промывка под проточной водой",
    description:
      "Все инструменты тщательно промываются под проточной водой для полной очистки от дезсредств.",
  },
  {
    id: 3,
    icon: number3,
    title: "Полная сушка",
    description:
      "Инструменты тщательно просушиваются перед термической обработкой.",
  },
  {
    id: 4,
    icon: number4,
    title: "Термическая стерилизация",
    description:
      "Производится в сухожаре ГП. Каждый инструмент запаивается в индивидуальный крафт-пакет с индикатором стерильности и стерилизуется при высокой температуре.",
  },
  {
    id: 5,
    icon: number5,
    title: "Хранение в УФ-шкафу",
    description:
      "Стерильные инструменты хранятся в бактерицидном УФ-шкафу до использования.",
  },
];

const Sterilization = () => {
  return (
    <div className={`section ${styles.sterilization}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>алхимия стерильной чистоты</h2>
          <p className={styles.subtitle}>
            Каждый инструмент проходит 5 ступеней стерилизации — для вашей
            безопасности и нашей уверенности
          </p>
        </div>

        <div className={styles.content}>
          {sterilizationSteps.map((step) => (
            <div key={step.id} className={styles.steps}>
              <div className={styles.step}>
                <img src={step.icon} alt={`Шаг ${step.id}`} />
                <h2 className={styles.stepTitle}>{step.title}</h2>
              </div>
              <div className={styles.stepDescription}>
                <p className={styles.stepSubtitle}>{step.description}</p>
              </div>
            </div>
          ))}

          <div className={styles.images}>
            <img src={mf} alt="Процесс стерилизации" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sterilization;
*/

/*const Sterilization = () => {
  return (
    <div className={`section ${styles.sterilization}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>алхимия стерильной чистоты</h2>
          <p className={styles.subtitle}>
            Каждый инструмент проходит 5 ступеней стерилизации — для вашей
            безопасности и нашей уверенности
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.stepsGroup}>
            {sterilizationSteps
              .filter((step) => step.id !== 5)
              .map((step) => (
                <div
                  key={step.id}
                  className={styles.steps}
                  data-step-id={step.id}
                >
                  <div className={styles.step}>
                    <img src={step.icon} alt={`Шаг ${step.id}`} />
                    <h2 className={styles.stepTitle}>{step.title}</h2>
                  </div>
                  <div className={styles.stepDescription}>
                    <p
                      className={`${styles.stepSubtitle} ${
                        step.id === 1 ? styles.stepSubtitleFirst : ""
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.imagesGroup}>
            <div className={styles.images}>
              <img src={mf} alt="Процесс стерилизации" />
            </div>
            {sterilizationSteps
              .filter((step) => step.id === 5)
              .map((step) => (
                <div key={step.id} className={styles.steps}>
                  <div className={styles.step}>
                    <img src={step.icon} alt={`Шаг ${step.id}`} />
                    <h2 className={styles.stepTitle}>{step.title}</h2>
                  </div>
                  <div className={styles.stepDescription}>
                    <p className={styles.stepSubtitle}>{step.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sterilization;

.sterilization {
  background-color: var(--color-bg-dark);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.header {
  position: relative;
  text-align: center;
  padding: 47px 150px;
}

.header::before,
.header::after {
  content: "";
  position: absolute;
  width: 150px;
  height: 92px;
  border: 3px solid #000;
}

.header::before {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.header::after {
  bottom: 0;
  right: 0;
  border-top: none;
  border-left: none;
}

.title {
  padding-bottom: 60px !important;
  margin-bottom: 0;
}

.content {
  display: flex;
  gap: 46px;
}

.stepsGroup {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.imagesGroup {
  display: flex;
  flex-direction: column;
  gap: 43px;
  max-width: 597px;
}

.imagesGroup .steps {
  width: 597px;
  border: 2px solid #2e2622;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 2px solid #2e2622;
  border-radius: 20px;
  padding: 40px;
  width: 840px;
  max-width: 100%;
}

.step {
  display: flex;
  align-items: center;
  gap: 30px;
}

.stepTitle {
  font-size: 36px;
  margin-bottom: 0;
  letter-spacing: 0.01em;
}

.stepSubtitle {
  font-size: 32px;
  letter-spacing: 0.02em;
  color: #000;
}

.stepSubtitleFirst {
  padding-bottom: 60px;
}*/
