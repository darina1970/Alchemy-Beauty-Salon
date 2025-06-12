import React from "react";
import styles from './Header.module.css';
import cn from "classnames";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.svg";
import vk from "../../assets/icons/socials/vk.svg";
import tg from "../../assets/icons/socials/tg.svg";
import phone from "../../assets/icons/socials/phone.svg";


const Header = ({ backgroundClass, menuItems}) => {
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
                                        <a href={item.href}>{item.label}</a>
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





// const Header = ({ backgroundSrc, menuItems}) => {
//     return (
//         <header className={styles.header}>
//             <img src={backgroundSrc} alt="Баннер" className={styles.bannerImage} />
//             <div className={styles.overlay}>
//                 <div className={styles.logo}>
//                     <img src={logo} alt="Логотип" />
//                 </div>
//                 <nav className={styles.nav}>
//                     <ul>
//                         {menuItems.map((item) => (
//                             <li key={item.href}>
//                                 <a href={item.href}>{item.label}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//                 <div className={styles.socials}>
//                     <div className={styles.socialWrapper}>
//                         <img src={vk} alt="Иконка социальной сети ВКонтакте" />
//                     </div>
//                     <div className={styles.socialWrapper}>
//                         <img src={tg} alt="Иконка социальной сети Telegram" />
//                     </div>
//                     <div className={styles.socialWrapper}>
//                         <img src={phone} alt="Иконка телефонной трубки" />
//                     </div>                    
//                 </div>
//             </div>
//             <div className="container">
//                 <div className={styles.textBlock}>
//                     <h1>ЛАБОРАТОРИЯ КРАСОТЫ АЛХИМИЯ</h1>
//                     <button className={styles.btn}>ОНЛАЙН-ЗАПИСЬ</button>
//                 </div>
//             </div>
//         </header>
//     );
// };


// const Header = ({ bannerImages, menuItems}) => {
//     return (
//         <header className={styles.header}>
//             <picture className={styles.bannerPicture}>
//                 <source media="(max-width: 575px)" srcSet={bannerImages.mobile} />
//                 <source media="(max-width: 1000px)" srcSet={bannerImages.tablet} />
//                 <img src={bannerImages.desktop} alt="Баннер" className={styles.bannerImage} loading="lazy" />
//             </picture>
//             <div className={styles.overlay}>
//                 <div className={styles.logo}>
//                     <img src={logo} alt="Логотип" />
//                 </div>
//                 <nav className={styles.nav}>
//                     <ul>
//                         {menuItems.map((item) => (
//                             <li key={item.href}>
//                                 <a href={item.href}>{item.label}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//                 <div className={styles.socials}>
//                     <div className={styles.socialWrapper}>
//                         <img src={vk} alt="Иконка социальной сети ВКонтакте" />
//                     </div>
//                     <div className={styles.socialWrapper}>
//                         <img src={tg} alt="Иконка социальной сети Telegram" />
//                     </div>
//                     <div className={styles.socialWrapper}>
//                         <img src={phone} alt="Иконка телефонной трубки" />
//                     </div>                    
//                 </div>
//             </div>
//             <div className="container">
//                 <div className={styles.textBlock}>
//                     <h1>ЛАБОРАТОРИЯ КРАСОТЫ АЛХИМИЯ</h1>
//                     <button className={styles.btn}>ОНЛАЙН-ЗАПИСЬ</button>
//                 </div>
//             </div>
//         </header>
//     );
// };

export default Header;