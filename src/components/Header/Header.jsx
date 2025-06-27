import React, { useState, useRef } from 'react';
import { usePageConfig } from '../../hooks/usePageConfig';
import { useAutoCloseMenuOnResize } from '../../hooks/useAutoCloseMenuOnResize';
import TabletTopHeader from './TabletTopHeader';
import BurgerMenu from './BurgerMenu';
import NavigationMenu from './NavigationMenu';
import MobileTitleWrapper from './MobileTitleWrapper';
import MobileButtonWrapper from './MobileButtonWrapper';
import HeaderWrapper from './HeaderWrapper';

const Header = () => {
    const { backgroundClass, menuItems, titlePrefix } = usePageConfig();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerButtonRef = useRef(null);
    const closeMenu = () => setIsMenuOpen(false);
    
        // Закрытие бургера при расширении экрана
    useAutoCloseMenuOnResize(isMenuOpen, closeMenu);

    return (
        <header>
            <TabletTopHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                burgerButtonRef={burgerButtonRef}
            />
            
            <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} burgerButtonRef={burgerButtonRef}>
                <NavigationMenu menuItems={menuItems} onLinkClick={closeMenu} isMobile />
            </BurgerMenu>

            <MobileTitleWrapper titlePrefix={titlePrefix} />

            <HeaderWrapper backgroundClass={backgroundClass} titlePrefix={titlePrefix}>
                <NavigationMenu menuItems={menuItems} />
            </HeaderWrapper>

            <MobileButtonWrapper />
        </header>
    );
};

export default Header;




