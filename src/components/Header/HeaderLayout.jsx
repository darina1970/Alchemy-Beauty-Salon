import React, { useState, useRef } from 'react';
import { usePageConfig } from '../../hooks/usePageConfig';
import { useAutoCloseMenuOnResize } from '../../hooks/useAutoCloseMenuOnResize';
import TabletTopHeader from './TabletTopHeader';
import BurgerNavigation from './BurgerNavigation';
import HeaderWrapper from './HeaderWrapper';
import MobileTitleWrapper from './MobileTitleWrapper';
import MobileButtonWrapper from './MobileButtonWrapper';
import NavigationMenu from './NavigationMenu';

const HeaderLayout = ({ showBanner = true, showRoomMenu = false }) => {
    const { backgroundClass, menuItems, titlePrefix } = usePageConfig();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerButtonRef = useRef(null);
    const closeMenu = () => setIsMenuOpen(false);

    useAutoCloseMenuOnResize(isMenuOpen, closeMenu);

    return (
        <header>
            <TabletTopHeader
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                burgerButtonRef={burgerButtonRef}
                showOnDesktop={showRoomMenu}
                backgroundClass={backgroundClass}
                withNav={showRoomMenu}
                menuItems={menuItems}
            />

            <BurgerNavigation
                isOpen={isMenuOpen}
                onClose={closeMenu}
                burgerButtonRef={burgerButtonRef}
                menuItems={menuItems}
            />

            {showBanner && (
                <>
                    <MobileTitleWrapper titlePrefix={titlePrefix} />
                    <HeaderWrapper backgroundClass={backgroundClass} titlePrefix={titlePrefix}>
                        <NavigationMenu menuItems={menuItems} />
                    </HeaderWrapper>
                    <MobileButtonWrapper />
                </>
            )}
        </header>
    );
};

export default HeaderLayout;