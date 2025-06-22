import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo.svg";
import vk from "../../assets/icons/socials/vk.svg";
import tg from "../../assets/icons/socials/tg.svg";
import phone from "../../assets/icons/socials/phone.svg";
import { usePageConfig } from "../../hooks/usePageConfig";

const HeaderRoom = () => {
    const { menuItems, backgroundClass } = usePageConfig();
    const location = useLocation();

    return (
        <header className={`${styles.header} ${styles[backgroundClass]}`}>
            <div className="container">
                <div className={styles.topHeaderWrapper}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <nav className={styles.nav}>
                        <ul>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                            <Link
                                to={item.href}
                                className={`${styles.navLink} ${location.pathname === item.href ? styles.active : ''}`}
                            >
                                {item.label}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                    <div className={styles.socials}>
                        <a className={styles.socialWrapper} href="#" target="_blank" rel="noopener noreferrer">
                            <img className={styles.socialIcon} src={vk} alt="Иконка социальной сети ВКонтакте" />
                        </a>
                        <a className={styles.socialWrapper} href="#" target="_blank" rel="noopener noreferrer">
                            <img className={styles.socialIcon} src={tg} alt="Иконка социальной сети Telegram" />
                        </a>
                        <a className={styles.socialWrapper} href="#" target="_blank" rel="noopener noreferrer">
                            <img className={styles.socialIcon} src={phone} alt="Иконка телефонной трубки" />
                        </a>                    
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderRoom;