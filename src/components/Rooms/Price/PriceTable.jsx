import React from "react";
import styles from './PriceTable.module.css';

const PriceTable = ({ data, columns = ['Услуга', 'Цена'] }) => {
    const showSubHeaders = columns.length > 2;

    return (
        <div className={styles.priceTable}>
            {showSubHeaders && (
                <div className={`${styles.priceRow} ${styles.evenRow}`}>
                    <span className={`${styles.col} ${styles.col0}`}></span>
                    {columns.slice(1).map((col, idx) => (
                        <span key={idx} className={`${styles.col} ${styles.colRight}`}>
                            {col}
                        </span>
                    ))}
                </div>
            )}

            {data.map((item, rowIndex) => {
                const isOdd = (rowIndex + (showSubHeaders ? 1 : 0)) % 2 !== 0;
                return (
                    <div
                        key={rowIndex}
                        className={`${styles.priceRow} ${
                            isOdd ? styles.oddRow : styles.evenRow
                        }`}
                    >
                        {columns.map((_, colIndex) => (
                            <span
                                key={colIndex}
                                className={`${styles.col} ${
                                    colIndex === 0 ? styles.col0 : styles.colRight
                                }`}
                            >
                                {item[`col${colIndex}`]}
                            </span>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default PriceTable;