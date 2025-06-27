import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const NavigationMenu = ({ menuItems, onLinkClick, isMobile = false }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleAnchorClick = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollToId: id } });
        } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        if (onLinkClick) onLinkClick();
    };

    return (
        <nav className={isMobile ? styles.burgerNav : styles.nav}>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.href}>
                        {item.href.startsWith('#') ? (
                        <a href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>
                            {item.label}
                        </a>
                        ) : (
                        <Link to={item.href} onClick={() => onLinkClick && onLinkClick()}>
                            {item.label}
                        </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationMenu;


