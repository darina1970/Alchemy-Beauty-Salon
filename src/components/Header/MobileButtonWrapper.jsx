import React from 'react';
import styles from './Header.module.css';

const MobileButtonWrapper = () => {
    return (
        <div className={styles.mobileButtonWrapper}>
            <div className="container">
                <button type="button" className={styles.recordButton}>
                    Онлайн-запись
                </button>
            </div>
        </div>
    );
};

export default MobileButtonWrapper;