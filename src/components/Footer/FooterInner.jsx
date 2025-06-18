import React from 'react';
import styles from "./Footer.module.css";

const FooterInner = ({ quote, menuItems }) => (
    <footer className={styles.footerInner}>
        <div className="container">
            <div className="footer-quote">
                <p>“ {quote} ”</p>
            </div>
        </div>
        <div className={styles.footerContent}>
            <span>© 2025 АЛХИМИЯ</span>
            <nav>
                <ul className={styles.footerNav}>
                {menuItems.map(({ label, href }) => (
                    <li key={href}><a href={href}>{label}</a></li>
                ))}
                </ul>
            </nav>
            <button className="scroll-top">↑</button>
        </div>
    </footer>
);

export default FooterInner;