import React from 'react';
import styles from './Header.module.css';

const MobileButtonWrapper = () => {
    return (
        <div className={styles.mobileButtonWrapper}>
            <a href="https://dikidi.app/1640050?p=0.pi" className={styles.btn} target="_blank" rel="noopener noreferrer">ОНЛАЙН-ЗАПИСЬ</a>
        </div>
    );
};

export default MobileButtonWrapper;



