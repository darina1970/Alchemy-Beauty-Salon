import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const HeaderWithMenu = ({
    menuItems,
    containerClassName = '',
    backgroundClassName = '',
    renderLogo,
    renderMenuNav,
    renderAdditionalContent,
    }) => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const menuRef = useRef(null);
        const navigate = useNavigate();
        const location = useLocation();

        const handleAnchorClick = (e, href) => {
            if (e) e.preventDefault();
            const id = href?.replace('#', '');

            if (location.pathname !== '/') {
            navigate('/', { state: { scrollToId: id } });
            } else {
            if (id) {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
            }
            setIsMenuOpen(false);
        };

  // Закрываем меню по клику вне
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !e.target.closest(`.${styles.burgerButton}`)
            ) {
                setIsMenuOpen(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    // Закрываем меню при ресайзе
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
        <header className={`${containerClassName} ${backgroundClassName}`}>
            {renderLogo({ isMenuOpen, setIsMenuOpen })}

            {isMenuOpen && (
                <div className={styles.burgerMenu} ref={menuRef}>
                {renderMenuNav({ menuItems, handleAnchorClick })}
                </div>
            )}

            {renderAdditionalContent && renderAdditionalContent()}
        </header>
    );
};

export default HeaderWithMenu;