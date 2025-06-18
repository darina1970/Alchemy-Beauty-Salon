import React from "react";
import styles from "./Footer.module.css";

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
      <button className="scroll-top">↑</button>
    </div>
  </footer>
);

export default FooterMain;