import { useState } from "react";
import Tabs from "./Tabs";
import PriceTable from "./PriceTable";
import styles from './PriceBlock.module.css';

const PriceBlock = ({ tabs, defaultTabKey, pricesByTab, notesByTab, note }) => {
    const [activeTab, setActiveTab] = useState(defaultTabKey || (tabs ? tabs[0].key : null));

    const currentPrices = tabs ? pricesByTab[activeTab] : pricesByTab;
    const currentNote = tabs ? (notesByTab?.[activeTab] || null) : note;

    return (
        <div className={styles.priceBlock}>
            <div className="container">
                <h2 className={styles.title}>Прайс</h2>

            {tabs && (
                <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={setActiveTab}
                />
            )}

            <PriceTable data={currentPrices} />

            {currentNote && (
                <p className={styles.note}>{currentNote}</p>
            )}
            <button className={styles.button}>Записаться</button>
            </div>
            
        </div>
    );
};

export default PriceBlock;