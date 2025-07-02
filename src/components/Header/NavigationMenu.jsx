import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const NavigationMenu = ({ menuItems, onLinkClick, isMobile = false }) => {
    return (
        <nav className={isMobile ? styles.burgerNav : styles.nav}>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.href}>
                        {item.href.startsWith('#') || item.href.startsWith('/#') ? (
                            <a
                                href={item.href}
                                onClick={() => onLinkClick && onLinkClick()}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                to={item.href}
                                onClick={() => onLinkClick && onLinkClick()}
                            >
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


