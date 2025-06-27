// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import styles from "./Header.module.css";
// import logo from "../../assets/logo/logo.svg";
// import vk from "../../assets/icons/socials/vk.svg";
// import tg from "../../assets/icons/socials/tg.svg";
// import phone from "../../assets/icons/socials/phone.svg";
// import cn from "classnames";
// import { usePageConfig } from "../../hooks/usePageConfig";

// const HeaderRoom = () => {
//     const { menuItems, backgroundClass } = usePageConfig();
//     const location = useLocation();
//     const navigate = useNavigate();

//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const menuRef = useRef(null);

//     const handleAnchorClick = (e, href) => {
//         e.preventDefault();
//         const id = href.replace('#', '');
//         if (location.pathname !== '/') {
//             navigate('/', { state: { scrollToId: id } });
//         } else {
//             const el = document.getElementById(id);
//             if (el) {
//                 el.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
//         setIsMenuOpen(false);
//     };

//     // Закрытие по клику вне
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (
//                 menuRef.current &&
//                 !menuRef.current.contains(e.target) &&
//                 !e.target.closest(`.${styles.burgerButton}`)
//             ) {
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
//             document.addEventListener('touchstart', handleClickOutside);
//             document.addEventListener('keydown', handleEscape);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//             document.removeEventListener('touchstart', handleClickOutside);
//             document.removeEventListener('keydown', handleEscape);
//         }
//     }, [isMenuOpen]);

//     // Закрытие при resize
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 920 && isMenuOpen) {
//                 setIsMenuOpen(false);
//             }
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [isMenuOpen]);

//     return (
//         <header className={cn(styles.header, styles[backgroundClass])}>
//             <div className="container">
//                 <div className={cn(styles.topHeaderWrapper, styles.roomHeaderWrapper)}>
//                     <Link to="/" className={styles.logo}>
//                         <img src={logo} className={styles.logoImg} alt="Логотип" />
//                     </Link>

//                     <nav className={cn(styles.nav, styles.navRoom)}>
//                         <ul>
//                             {menuItems.map((item) => (
//                                 <li key={item.href}>
//                                     {item.href.startsWith('#') ? (
//                                         <a
//                                             href={item.href}
//                                             onClick={(e) => handleAnchorClick(e, item.href)}
//                                             className={cn(styles.navLink)}
//                                         >
//                                             {item.label}
//                                         </a>
//                                     ) : (
//                                         <Link
//                                             to={item.href}
//                                             className={cn(styles.navLink, {
//                                                 [styles.active]: location.pathname === item.href,
//                                             })}
//                                         >
//                                             {item.label}
//                                         </Link>
//                                     )}
//                                     </li>
//                             ))}
//                         </ul>
//                     </nav>

//                     <div className={styles.socials}>
//                         <a className={styles.socialWrapper} href="https://vk.com/alchemyyy" target="_blank" rel="noopener noreferrer">
//                             <img className={styles.socialIcon} src={vk} alt="ВКонтакте" />
//                         </a>
//                         <a className={styles.socialWrapper} href="https://t.me/alchemy00" target="_blank" rel="noopener noreferrer">
//                             <img className={styles.socialIcon} src={tg} alt="Telegram" />
//                         </a>
//                         <a className={styles.socialWrapper} href="https://wa.me/79137835046" target="_blank" rel="noopener noreferrer">
//                             <img className={styles.socialIcon} src={phone} alt="Телефон" />
//                         </a>
//                     </div>

//                     {/* Кнопка-бургер */}
//                     <div
//                         className={cn(styles.burgerButton, { [styles.open]: isMenuOpen })}
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         aria-label="Меню"
//                     >
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>
//             </div>

//             {/* Бургер-меню */}
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
//         </header>
//     );
// };

// export default HeaderRoom;


import React, { useState, useEffect, useRef } from 'react';
import { usePageConfig } from '../../hooks/usePageConfig';
import TabletTopHeader from './TabletTopHeader';
import BurgerMenu from './BurgerMenu';
import NavigationMenu from './NavigationMenu';


const HeaderRoom = () => {
    const { menuItems, backgroundClass } = usePageConfig();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerButtonRef = useRef(null);

    const closeMenu = () => setIsMenuOpen(false);
    
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
            <TabletTopHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                burgerButtonRef={burgerButtonRef}
                showOnDesktop={true}
                backgroundClass={backgroundClass}
            />
            
            <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} burgerButtonRef={burgerButtonRef}>
                <NavigationMenu menuItems={menuItems} onLinkClick={closeMenu} isMobile />
            </BurgerMenu>

        </header>
    );
};

export default HeaderRoom;
