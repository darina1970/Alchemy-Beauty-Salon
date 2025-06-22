import React, { useEffect, useState, useRef } from "react";
import styles from './Header.module.css';
import cn from "classnames";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logo.svg";
import vk from "../../assets/icons/socials/vk.svg";
import tg from "../../assets/icons/socials/tg.svg";
import phone from "../../assets/icons/socials/phone.svg";
import { usePageConfig } from "../../hooks/usePageConfig";


const Header = () => {
    const { backgroundClass, menuItems, titlePrefix } = usePageConfig();
    const location = useLocation();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

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

        setIsMenuOpen(false);
    };

    // Закрытие меню по клику вне
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !e.target.closest(`.${styles.burgerButton}`)
            ) {
                setIsMenuOpen(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    // Закрытие бургера при расширении экрана
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 920 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <header>
            <div className={styles.tabletTopHeader}>
                <div className="container">
                    <div className={styles.topHeaderWrapper}>
                        <Link to='/' className={styles.logo}>
                            <img className={styles.logoImg} src={logo} alt="Логотип" />
                        </Link>
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
                        <div
                            className={cn(styles.burgerButton, { [styles.open]: isMenuOpen })}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Меню"
                            >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Бургер меню разворачивается вниз */}
            {isMenuOpen && (
                <div className={styles.burgerMenu} ref={menuRef}>
                    <ul className={styles.burgerNav}>
                        {menuItems.map((item) =>(
                            <li key={item.href}>
                                {item.href.startsWith('#') ? (
                                    <a href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>{item.label}</a>
                                ) : (
                                    <Link to={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className={styles.mobileTitleWrapper}>
                <h1 className={styles.mobileTitle}>ЛАБОРАТОРИЯ КРАСОТЫ <span className={styles.mobileTitleSpan}>АЛХИМИЯ</span></h1>
            </div>
            <div className={cn(styles.headerWrapper, styles[backgroundClass])} >
                <div className={styles.topHeaderWrapperOverlay}>
                    <div className="container">
                        <div className={styles.topHeaderWrapper}>
                            <Link to='/' className={styles.logo}>
                                <img className={styles.logoImg} src={logo} alt="Логотип" />
                            </Link>
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
                        <h1>{titlePrefix}<span className={styles.titleSpan}>АЛХИМИЯ</span></h1>
                        <a href="https://dikidi.app/1640050?p=0.pi" className={styles.btn} target="_blank" rel="noopener noreferrer">ОНЛАЙН-ЗАПИСЬ</a>
                    </div>
                </div>
            </div>
            <div className={styles.mobileButtonWrapper}>
                <a href="#" className={styles.btn} target="_blank" rel="noopener noreferrer">ОНЛАЙН-ЗАПИСЬ</a>
            </div>
        </header>
        
    );
};


export default Header;


