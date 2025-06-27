import React from 'react';
import styles from './Header.module.css';

const MobileTitleWrapper = ({titlePrefix}) => {
    return (
        <div className={styles.mobileTitleWrapper}>
            <div className="container">
                <h1>{titlePrefix}<span className={styles.titleSpan}>АЛХИМИЯ</span></h1>
            </div>
        </div>
    );
};

export default MobileTitleWrapper;