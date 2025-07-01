import React from 'react';
import styles from './Header.module.css'; // общий css для соцсетей

import vk from "../../assets/icons/socials/vk.svg";
import tg from "../../assets/icons/socials/tg.svg";
import phone from "../../assets/icons/socials/phone.svg";

const Socials = () => (
    <div className={styles.socials}>
        <a href="https://vk.com/alchemyyy" target="_blank" rel="noopener noreferrer" className={styles.socialWrapper}>
            <img src={vk} alt="ВКонтакте" className={styles.socialIcon} />
        </a>
        <a href="https://t.me/alchemy00" target="_blank" rel="noopener noreferrer" className={styles.socialWrapper}>
            <img src={tg} alt="Telegram" className={styles.socialIcon} />
        </a>
        <a href="https://wa.me/79137835046" target="_blank" rel="noopener noreferrer" className={styles.socialWrapper}>
            <img src={phone} alt="Телефон" className={styles.socialIcon} />
        </a>
    </div>
);

export default Socials;