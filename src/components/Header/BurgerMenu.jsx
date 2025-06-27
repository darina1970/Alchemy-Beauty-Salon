// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

// const BurgerMenu = ({ isOpen, onClose, children }) => {
//     const menuRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (menuRef.current && !menuRef.current.contains(e.target)) {
//                 onClose();
//             }
//         };

//         const handleEscape = (e) => {
//             if (e.key === 'Escape') {
//                 onClose();
//             }
//         };

//         if (isOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//             document.addEventListener('keydown', handleEscape);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//             document.removeEventListener('keydown', handleEscape);
//         };
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     const handleAnchorClick = (e, href) => {
//         e.preventDefault();
//         const target = document.querySelector(href);
//         if (target) {
//             target.scrollIntoView({ behavior: 'smooth' });
//             onClose();
//         }
//     };

//     return (
//         <div className={styles.burgerMenu} ref={menuRef}>
//             <ul className={styles.burgerNav}>
//                 {children.map((item) => (
//                     <li key={item.href}>
//                         {item.href.startsWith('#') ? (
//                             <a href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>
//                                 {item.label}
//                             </a>
//                         ) : (
//                             <Link to={item.href} onClick={onClose}>
//                                 {item.label}
//                             </Link>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BurgerMenu;


import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';

const BurgerMenu = ({ isOpen, onClose, children }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClose();
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.burgerMenu} ref={menuRef}>
            {children}
        </div>
    );
};

export default BurgerMenu;



