// import React, { useEffect, useRef } from 'react';
// import styles from './Header.module.css';

// const BurgerMenu = ({ isOpen, onClose, children, burgerButtonRef }) => {
//     const menuRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (
//                 menuRef.current &&
//                 !menuRef.current.contains(e.target) &&
//                 burgerButtonRef.current &&
//                 !burgerButtonRef.current.contains(e.target)
//             ) {
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

//     return (
//         <>
//             <div ref={menuRef} className={styles.burgerMenu}>
//                 {children}
//             </div>
//         </>
//     );
// };

// export default BurgerMenu;

import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';

const BurgerMenu = ({ isOpen, onClose, children, burgerButtonRef }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(e.target);
            const clickedOutsideButton =
                burgerButtonRef?.current && !burgerButtonRef.current.contains(e.target);

            if (clickedOutsideMenu && clickedOutsideButton) {
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
    }, [isOpen, onClose, burgerButtonRef]);

    if (!isOpen) return null;

    return (
        <div ref={menuRef} className={styles.burgerMenu}>
            {children}
        </div>
    );
};

export default BurgerMenu;

