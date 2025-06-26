import { useState } from "react";
import Tabs from "./Tabs";
import PriceTable from "./PriceTable";
import styles from './PriceBlock.module.css';

const PriceBlock = ({ variant, tabs, defaultTabKey, pricesByTab, theme = 'light' }) => {
    const [activeTab, setActiveTab] = useState(defaultTabKey || (tabs?.[0]?.key ?? null));
    const priceGroups = tabs ? pricesByTab[activeTab] : [pricesByTab];

    return (
        <section className={`section section-${variant}`}>
            <div className={`${styles.priceBlock} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className="container">
                    <h2 className={styles.title}>Прайс</h2>

                    {tabs && (
                        <Tabs
                            tabs={tabs}
                            activeTab={activeTab}
                            onTabClick={setActiveTab}
                        />
                    )}

                    {priceGroups.map((group, idx) => (
                        <div key={idx} className={styles.priceGroup}>
                            {group.title && <h3 className={styles.priceGroupTitle}>{group.title}</h3>}

                            <PriceTable data={group.data} columns={group.columns} />

                            {group.note && (
                                <p className={styles.note}>{group.note}</p>
                            )}

                            <a href="https://dikidi.app/1640050?p=0.pi" target="_blank" rel="noopener noreferrer" className={`btn-secondary ${styles.priceButton}`}>Записаться</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
    );
};

export default PriceBlock;