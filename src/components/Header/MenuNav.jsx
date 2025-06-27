import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';

const MenuNav = ({ menuItems, onLinkClick, navClassName, linkClassName, activeClassName }) => {
    const location = useLocation();

    return (
        <nav className={cn(styles.nav, navClassName)}>
        <ul>
            {menuItems.map(({ href, label }) => (
                <li key={href}>
                    {href.startsWith('#') ? (
                    <a
                        href={href}
                        onClick={e => onLinkClick && onLinkClick(e, href)}
                        className={linkClassName}
                    >
                        {label}
                    </a>
                    ) : (
                    <Link
                        to={href}
                        className={cn(linkClassName, {
                        [activeClassName]: location.pathname === href,
                        })}
                        onClick={() => onLinkClick && onLinkClick(null, null)}
                    >
                        {label}
                    </Link>
                    )}
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default MenuNav;