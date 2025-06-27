import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';
import logo from '../../assets/logo/logo.svg';
import Socials from './Socials';
import NavigationMenu from './NavigationMenu';

const TabletTopHeader = ({ 
    isMenuOpen, 
    setIsMenuOpen, 
    burgerButtonRef, 
    showOnDesktop = false, 
    backgroundClass = '',
    menuItems = []    
}) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 920);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 920);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);
        

    return (
        <div className={cn(styles.tabletTopHeader, {
            [styles.showOnDesktop]: showOnDesktop,
            [styles[backgroundClass]]: backgroundClass
        })}
        >
            <div className="container">
                <div className={styles.topHeaderWrapper}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Логотип" className={styles.logoImg} />
                    </Link>

                    {isDesktop && (
                        <div className={styles.desktopMenuWrapper}>
                            <NavigationMenu menuItems={menuItems} />
                        </div>
                    )}

                    <Socials />

                    {!isDesktop && (
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
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default TabletTopHeader;

