import React, { useRef } from "react";
import quoteMark from "../../../assets/icons/quote.svg";
import styles from "./RoomMainScreen.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import arrowLeft from "../../../assets/icons/arrows/left.svg";
import arrowRight from "../../../assets/icons/arrows/right.svg";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1, dots: false },
    },
    {
      breakpoint: 575,
      settings: { slidesToShow: 1, dots: false },
    },
  ],
};

const RoomMainScreen = ({
  variant,
  title,
  quote,
  portfolio = [],
  useSlider = true,
  showGallery = true,
  showWhatsapp = true,
}) => {
  const sliderRef = useRef(null);

  const isSlider = useSlider && portfolio.length > 1;

  return (
    <section className={`section section-${variant}`}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.wrapper}>
          <div className={styles.sliderWrapper}>
            {isSlider && (
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className={styles.arrowLeftBtn}
                aria-label="Предыдущий слайд"
              >
                <img src={arrowLeft} alt="←" />
              </button>
            )}

            {isSlider ? (
              <Slider ref={sliderRef} {...settings}>
                {portfolio.map(({ src }, i) => (
                  <div key={i} className={styles.slide}>
                    <img src={src} alt={`Фото ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className={styles.slide}>
                <img src={portfolio[0]?.src} alt={title} loading="lazy" />
              </div>
            )}

            {isSlider && (
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className={styles.arrowRightBtn}
                aria-label="Следующий слайд"
              >
                <img src={arrowRight} alt="→" />
              </button>
            )}
          </div>

          <div className={styles.right}>
            <div className={styles.quoteWrapper}>
              <img className={styles.quoteMark} src={quoteMark} alt="цитата" />
              <p className={styles.quote}>{quote}</p>
            </div>

            <div className={styles.buttonsWrapper}>
              <div className={styles.buttons}>
                <a
                  href="https://dikidi.app/1640050?p=0.pi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-secondary ${styles.button}`}
                >
                  Онлайн-запись
                </a>

                {showGallery && (
                  <a
                    href="#gallery"
                    className={`btn-secondary ${styles.button}`}
                  >
                    Галерея работ
                  </a>
                )}
              </div>

              <div className={styles.buttons}>
                <a href="#price" className={`btn-secondary ${styles.button}`}>
                  Прайс
                </a>

                {showWhatsapp && (
                  <a
                    href="https://wa.me/79137835046"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-secondary ${styles.button}`}
                  >
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomMainScreen;
