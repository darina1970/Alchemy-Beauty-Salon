import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';
import logo from '../../assets/logo/logo.svg';
import Socials from './Socials';

const TabletTopHeader = ({ isMenuOpen, setIsMenuOpen, burgerButtonRef }) => {
    return (
        <div className={styles.tabletTopHeader}>
            <div className="container">
                <div className={styles.topHeaderWrapper}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Логотип" className={styles.logoImg} />
                    </Link>

                    <Socials />

                    <div
                        ref={burgerButtonRef}
                        className={cn(styles.burgerButton, { [styles.open]: isMenuOpen })}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                        type="button"
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabletTopHeader;