import React, { useState, useEffect, useRef } from 'react';
import { usePageConfig } from '../../hooks/usePageConfig';
import TabletTopHeader from './TabletTopHeader';
import BurgerMenu from './BurgerMenu';
import NavigationMenu from './NavigationMenu';


const HeaderRoom = () => {
    const { menuItems, backgroundClass } = usePageConfig();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerButtonRef = useRef(null);

    const closeMenu = () => setIsMenuOpen(false);
    
        // Закрытие бургера при расширении экрана
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
        <header>
            <TabletTopHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                burgerButtonRef={burgerButtonRef}
                showOnDesktop={true}
                backgroundClass={backgroundClass}
            />
            
            <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} burgerButtonRef={burgerButtonRef}>
                <NavigationMenu menuItems={menuItems} onLinkClick={closeMenu} isMobile />
            </BurgerMenu>

        </header>
    );
};

export default HeaderRoom;
