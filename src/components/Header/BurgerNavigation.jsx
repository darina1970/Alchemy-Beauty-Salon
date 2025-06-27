import BurgerMenu from './BurgerMenu';
import NavigationMenu from './NavigationMenu';

const BurgerNavigation = ({ isOpen, onClose, burgerButtonRef, menuItems }) => (
    <BurgerMenu isOpen={isOpen} onClose={onClose} burgerButtonRef={burgerButtonRef}>
        <NavigationMenu menuItems={menuItems} onLinkClick={onClose} isMobile />
    </BurgerMenu>
);

export default BurgerNavigation;