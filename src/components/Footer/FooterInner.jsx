import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from "./Footer.module.css";
import scrollTop from "../../assets/icons/arrows/up.svg";
import quoteMark from '../../assets/icons/quote.svg';
import copyright from '../../assets/icons/copyright.svg';

const FooterInner = ({ quote, menuItems }) => (
    <footer className={styles.footerInner}>
        <div className={styles.footerQuote}>
            <img src={quoteMark} alt="цитата" />
            <p>{quote}</p>
        </div>
        <div className={styles.footerContent}>
            <span>
                <img src={copyright} alt="Copyright" />
                <p>2025 АЛХИМИЯ</p>
            </span>
            <nav>
                <ul className={styles.footerNav}>
                    {menuItems.map(({ label, href }) => (
                        <li key={href}>
                            {href.includes('#') ? (
                                <HashLink smooth to={href}>
                                    {label}
                                </HashLink>
                            ) : (
                                <Link to={href}>{label}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div 
                className={styles.scrollTop}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Наверх"
            >
                <img src={scrollTop} alt="Наверх" />
            </div>
        </div>
    </footer>
);

export default FooterInner;