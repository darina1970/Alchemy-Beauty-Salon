import React from "react";
import tg from "../../../../assets/icons/socials/tg.svg";
import vk from "../../../../assets/icons/socials/vk.svg";
import phone from "../../../../assets/icons/socials/phone.svg";
import insta from "../../../../assets/icons/socials/insta.svg";
import dikidi from "../../../../assets/icons/socials/dikidi.svg";
import styles from "./Contacts.module.css";

const Contacts = ({ variant }) => {
  return (
    <section id="contacts" className={`section section-${variant}`}>
      <div className="container">
        <h2>Контакты</h2>
        <div className={styles.container}>
          <div className={styles.map}>
            <iframe
              className={styles.iframe}
              src="https://yandex.ru/map-widget/v1/?ll=82.900837%2C55.060261&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5Nzg4OBJD0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDQlNCw0YfQvdCw0Y8g0YPQu9C40YbQsCwgMjEvMyIKDTrNpUIVtT1cQg%2C%2C&z=16.85"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>адрес</h3>
                <a href="https://yandex.ru/map-widget/v1/?ll=82.900837%2C55.060261&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5Nzg4OBJD0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDQlNCw0YfQvdCw0Y8g0YPQu9C40YbQsCwgMjEvMyIKDTrNpUIVtT1cQg%2C%2C&z=16.85">
                  <p className={styles.text}>
                  Дачная, 21/3, <br /> Новосибирск
                  </p>
                </a>
              </div>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>Телефон</h3>
                <a href="tel:+79137835046">
                  <p className={styles.phone}>+7 (913) 783 50 46</p>
                </a>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>график работы</h3>
                <p className={styles.text}>
                  Ежедневно <br /> с 10:00 до 20:00
                </p>
              </div>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>Социальные сети</h3>
                <div className={styles.socialsWrapper}>
                  <div className={styles.socials}>
                    <a
                      className={styles.socialWrapper}
                      href="https://t.me/alchemy00"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={styles.socialIcon}
                        src={tg}
                        alt="telegram"
                      />
                    </a>
                    <a
                      className={styles.socialWrapper}
                      href="https://vk.com/alchemyyy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={styles.socialIcon}
                        src={vk}
                        alt="vkontakte"
                      />
                    </a>
                    <a
                      className={styles.socialWrapper}
                      href="https://www.instagram.com/alximia_salon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={styles.socialIcon}
                        src={insta}
                        alt="instagram"
                      />
                    </a>
                  </div>
                  <p className={styles.caption}>
                    Instagram - запрещён в России. Принадлежит Meta,
                    <br /> признанной экстремистской в РФ
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>Мессенджеры</h3>
                <div className={styles.socials}>
                  <a
                    className={styles.socialWrapper}
                    href="https://t.me/alchemy00"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.socialIcon}
                      src={tg}
                      alt="telegram"
                    />
                  </a>
                  <a
                    className={styles.socialWrapper}
                    href="https://wa.me/79137835046"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.socialIcon}
                      src={phone}
                      alt="whatsapp"
                    />
                  </a>
                </div>
              </div>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>онлайн-запись</h3>
                <a
                  className={styles.socialLink}
                  href="https://dikidi.net/ru/profile/laboratoriya_krasoty_alximiya_1640050"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.socialIcon}
                    src={dikidi}
                    alt="dikidi"
                  />
                  <p className={styles.text}>приложение DIKIDI</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
