import React from 'react';
import cn from 'classnames';
import styles from './Header.module.css';

const BurgerButton = ({ isOpen, onClick }) => (
    <button
        className={cn(styles.burgerButton, { [styles.open]: isOpen })}
        onClick={onClick}
        aria-label="Меню"
        type="button"
    >
        <span />
        <span />
        <span />
    </button>
);

export default BurgerButton;