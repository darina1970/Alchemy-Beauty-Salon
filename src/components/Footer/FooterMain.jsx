import React from "react";
import styles from "./Footer.module.css";
import scrollTop from '../../assets/icons/arrows/up.svg';

const FooterMain = ({ menuItems }) => (
  <footer className={styles.footerMain}>
    <div className={styles.footerContent}>
      <span>© 2025 АЛХИМИЯ</span>
      <nav>
        <ul className={styles.footerNav}>
          {menuItems.map(({ label, href }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>
      <button 
        className={styles.scrollTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
        aria-label="Наверх"
      >
        <img src={scrollTop} alt="Наверх" />
      </button>
    </div>
  </footer>
);

export default FooterMain;