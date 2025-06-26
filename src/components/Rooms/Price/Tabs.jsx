import React, { useEffect, useState } from "react";
import styles from './Tabs.module.css';

const Tabs = ({ tabs, activeTab, onTabClick }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isWrapMode, setIsWrapMode] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        const width = window.innerWidth;
        setIsMobile(width <= 768);         // mobile: show select
        setIsWrapMode(width <= 1290);      // wrap buttons below 1290px
        };

        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isCompact = tabs.length <= 3;

    if (isMobile) {
        return (
        <div className={styles.selectWrapper}>
            <select
            className={styles.select}
            value={activeTab}
            onChange={(e) => onTabClick(e.target.value)}
            >
            {tabs.map((tab) => (
                <option key={tab.key} value={tab.key}>
                {tab.label}
                </option>
            ))}
            </select>
        </div>
        );
    }

    return (
        <div className={`${styles.tabs} ${isWrapMode ? styles.wrap : ""} ${isCompact ? styles.centered : ""}`}>
        {tabs.map((tab, index) => {
            const isActive = tab.key === activeTab;
            const isFirst = index === 0;
            const isLast = index === tabs.length - 1;

            const buttonClass = [
            styles.tab,
            isActive && styles.active,
            !isWrapMode && isFirst && styles.first,
            !isWrapMode && isLast && styles.last,
            isCompact && styles.compact
            ]
            .filter(Boolean)
            .join(" ");

            return (
            <button
                key={tab.key}
                className={buttonClass}
                onClick={() => onTabClick(tab.key)}
            >
                {tab.label}
            </button>
            );
        })}
        </div>
    );
};

export default Tabs;