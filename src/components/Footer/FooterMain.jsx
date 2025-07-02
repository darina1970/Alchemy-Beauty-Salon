// import React from "react";
// import styles from "./Footer.module.css";
// import scrollTop from '../../assets/icons/arrows/up.svg';
// import copyright from '../../assets/icons/copyright.svg';

// const FooterMain = ({ menuItems }) => (
//   <footer className={styles.footerMain}>
//     <div className={styles.footerContent}>
//       <span>
//         <img src={copyright} alt="Copyright" />
//         <p>2025 АЛХИМИЯ</p>
//       </span>
//       <nav>
//         <ul className={styles.footerNav}>
//           {menuItems.map(({ label, href }) => (
//             <li key={href}><a href={href}>{label}</a></li>
//           ))}
//         </ul>
//       </nav>
//       <div
//         className={styles.scrollTop}
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
//         aria-label="Наверх"
//       >
//         <img src={scrollTop} alt="Наверх" />
//       </div>
//     </div>
//   </footer>
// );

// export default FooterMain;


import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Footer.module.css';
import scrollTop from '../../assets/icons/arrows/up.svg';
import copyright from '../../assets/icons/copyright.svg';

const FooterMain = ({ menuItems }) => {
  return (
    <footer className={styles.footerMain}>
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
                  // Плавный переход с скроллом по якорю
                  <HashLink smooth to={href}>
                    {label}
                  </HashLink>
                ) : (
                  // Обычный переход по маршруту
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
};

export default FooterMain;