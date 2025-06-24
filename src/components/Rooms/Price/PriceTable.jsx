import React from "react";
import styles from './PriceTable.module.css';

const PriceTable = ({ data, columns = ['Услуга', 'Цена'] }) => {
    return (
        <div className={styles.priceTable}>
            <div className={styles.priceHeader}>
                {columns.map((col, idx) => (
                    <span key={idx} className={`price-col col-${idx}`}>{col}</span>
                ))}
            </div>
            {data.map((item, index) => (
                <div key={index} className={styles.priceRow}>
                    {columns.map((_, idx) => (
                        <span key={idx} className={`price-col col-${idx}`}>
                            {item[`col${idx}`]}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PriceTable;