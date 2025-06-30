import React from 'react';
import cn from 'classnames';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import Socials from './Socials';

const HeaderWrapper = ({ backgroundClass, titlePrefix, children }) => {
    return (
        <div className={cn(styles.headerWrapper, styles[backgroundClass])}>
            <div className={styles.topHeaderWrapperOverlay}>
                <div className="container">
                    <div className={styles.topHeaderWrapper}>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt="Логотип" />
                        </Link>
                        {children /* Здесь NavigationMenu */}
                        <Socials />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.textBlock}>
                    <h1>
                        {titlePrefix}
                        <span className={styles.titleSpan}>АЛХИМИЯ</span>
                    </h1>
                    <a
                        href="https://dikidi.app/1640050?p=0.pi"
                        className={styles.btn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ОНЛАЙН-ЗАПИСЬ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderWrapper;