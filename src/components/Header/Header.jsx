import React from "react";
import styles from './Header.module.css';
import cn from "classnames";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logo.svg";
import vk from "../../assets/icons/socials/vk.svg";
import tg from "../../assets/icons/socials/tg.svg";
import phone from "../../assets/icons/socials/phone.svg";


const Header = ({ backgroundClass, menuItems}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleAnchorClick = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');

        if (location.pathname !=='/') {
            navigate('/', {state: {scrollToId: id}});
        } else {
            const el = document.getElementById(id);
            if(el) {
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
    };
    return (
        <header className={cn(styles.header, styles[backgroundClass])}>
            <div className={styles.overlay}>
                <div className="container">
                    <div className={styles.headerWrapper}>
                        <a className={styles.logo}>
                            <Link to='/'>
                                <img className={styles.logoImg} src={logo} alt="Логотип" />
                            </Link>
                        </a>
                        <nav className={styles.nav}>
                            <ul>
                                {menuItems.map((item) => (
                                    <li key={item.href}>
                                        {item.href.startsWith('#') ? (
                                            <a href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>{item.label}</a>
                                        ) : (
                                            <Link to = {item.href}>{item.label}</Link>
                                        )}
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
            </div>
            <div className="container">
                <div className={styles.textBlock}>
                    <h1>ЛАБОРАТОРИЯ КРАСОТЫ <span className={styles.titleSpan}>АЛХИМИЯ</span></h1>
                    <a href="#" className={styles.btn} target="_blank" rel="noopener noreferrer">ОНЛАЙН-ЗАПИСЬ</a>
                </div>
            </div>
        </header>
    );
};


export default Header;