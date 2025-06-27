// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import cn from 'classnames';
// import styles from './Header.module.css';
// import logo from '../../assets/logo/logo.svg';
// import Socials from './Socials';

// const TabletTopHeader = ({ isMenuOpen, setIsMenuOpen, menuItems }) => {
//     const menuRef = useRef(null);

//     const handleAnchorClick = (e, href) => {
//         e.preventDefault();
//         const target = document.querySelector(href);
//         if (target) {
//             target.scrollIntoView({ behavior: 'smooth' });
//             setIsMenuOpen(false);
//         }
//     };

//     // Закрытие по клику вне и по Escape
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (menuRef.current && !menuRef.current.contains(e.target)) {
//                 setIsMenuOpen(false);
//             }
//         };

//         const handleEscape = (e) => {
//             if (e.key === 'Escape') {
//                 setIsMenuOpen(false);
//             }
//         };

//         if (isMenuOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//             document.addEventListener('keydown', handleEscape);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//             document.removeEventListener('keydown', handleEscape);
//         };
//     }, [isMenuOpen]);

//     return (
//         <>
//             <div className={styles.tabletTopHeader}>
//                 <div className="container">
//                     <div className={styles.topHeaderWrapper}>
//                         <Link to="/" className={styles.logo}>
//                             <img src={logo} alt="Логотип" className={styles.logoImg} />
//                         </Link>
//                         <Socials />
//                         <button
//                             className={cn(styles.burgerButton, { [styles.open]: isMenuOpen })}
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             aria-label="Открыть меню"
//                             type="button"
//                         >
//                             <span />
//                             <span />
//                             <span />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {isMenuOpen && (
//                 <div className={styles.burgerMenu} ref={menuRef}>
//                     <ul className={styles.burgerNav}>
//                         {menuItems.map((item) => (
//                             <li key={item.href}>
//                                 {item.href.startsWith('#') ? (
//                                     <a href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>
//                                         {item.label}
//                                     </a>
//                                 ) : (
//                                     <Link to={item.href} onClick={() => setIsMenuOpen(false)}>
//                                         {item.label}
//                                     </Link>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </>
//     );
// };

// export default TabletTopHeader;


import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';
import logo from '../../assets/logo/logo.svg';
import Socials from './Socials';

const TabletTopHeader = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div className={styles.tabletTopHeader}>
            <div className="container">
                <div className={styles.topHeaderWrapper}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Логотип" className={styles.logoImg} />
                    </Link>

                    <Socials />

                    <button
                        className={cn(styles.burgerButton, { [styles.open]: isMenuOpen })}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                        type="button"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabletTopHeader;