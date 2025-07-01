import styles from "../Sterilization/Sterilization.module.css";
import mf from "../../../../assets/images/Rooms/Sterilization/mf.webp";

import step1Img from "../../../../assets/images/Rooms/Sterilization/foto1.webp";
import step2Img from "../../../../assets/images/Rooms/Sterilization/foto2.webp";
import step3Img from "../../../../assets/images/Rooms/Sterilization/foto3.webp";

import number1 from "../../../../assets/icons/sterilization/number1.svg";
import number2 from "../../../../assets/icons/sterilization/number2.svg";
import number3 from "../../../../assets/icons/sterilization/number3.svg";
import number4 from "../../../../assets/icons/sterilization/number4.svg";
import number5 from "../../../../assets/icons/sterilization/number5.svg";

import quote from "../../../../assets/icons/quote.svg";

const sterilizationSteps = [
  {
    id: 1,
    icon: number1,
    title: "Обработка в дезрастворе",
    description:
      "Все инструменты замачиваются в стоматологическом дезрастворе, имеющем сертификат качества.",
    image: step1Img,
  },
  {
    id: 2,
    icon: number2,
    title: "Промывка под проточной водой",
    description:
      "Все инструменты тщательно промываются под проточной водой для полной очистки от дезсредств.",
    image: step2Img,
  },
  {
    id: 3,
    icon: number3,
    title: "Полная сушка",
    description:
      "Инструменты тщательно просушиваются перед термической обработкой.",
    image: step3Img,
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
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>алхимия стерильной чистоты</h2>
          <p className={styles.subtitle}>
            Каждый инструмент проходит 5 ступеней стерилизации — для вашей
            безопасности и нашей уверенности
          </p>
        </div>
        <div className={styles.content}>
          {/* Десктопная картинка */}
          <img
            src={mf}
            alt="Процесс стерилизации"
            className={styles.stepImage}
          />
          {/* Шаги 1–5 */}
          {sterilizationSteps.map((step) => (
            <div
              key={step.id}
              className={`${styles.stepWrapper} ${styles[`step${step.id}`]}`}
            >
              <div className={styles.steps}>
                <div className={styles.step}>
                  <img src={step.icon} alt={`Шаг ${step.id}`} />
                  <h2 className={styles.stepTitle}>{step.title}</h2>
                </div>
                <div className={styles.stepDescription}>
                  <p className={styles.stepSubtitle}>{step.description}</p>
                </div>
              </div>
              {/* Адаптивная картинка */}
              {step.image && (
                <img
                  className={styles.adaptiveImage}
                  src={step.image}
                  alt={`Изображение к шагу ${step.id}`}
                />
              )}
            </div>
          ))}
        </div>
        <div className={styles.citate}>
          <div className={styles.citateInner}>
            <img src={quote} alt="quote" />
            <h2>чистота - наш главный ритуал</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sterilization;
