// import React from "react";
// import styles from './Tabs.module.css';

// const Tabs = ({ tabs, activeTab, onTabClick }) => (
//     <div className={styles.tabs}>
//         {tabs.map(tab => (
//         <button
//             key={tab.key}
//             className={`tab ${tab.key === activeTab ? 'active' : ''}`}
//             onClick={() => onTabClick(tab.key)}
//         >
//             {tab.label}
//         </button>
//         ))}
//     </div>
// );

// export default Tabs;

import React from "react";
import styles from './Tabs.module.css';

const Tabs = ({ tabs, activeTab, onTabClick }) => (
    <div className={styles.tabs}>
        {tabs.map((tab, index) => {
        const isActive = tab.key === activeTab;
        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;

        const buttonClass = [
            styles.tab,
            isActive && styles.active,
            isFirst && styles.first,
            isLast && styles.last
        ].filter(Boolean).join(' ');

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

export default Tabs;