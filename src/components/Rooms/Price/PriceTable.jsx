const PriceTable = ({ data, columns = ['Услуга', 'Цена'] }) => {
    return (
        <div className="price-table">
            <div className="price-header">
                {columns.map((col, idx) => (
                    <span key={idx} className={`price-col col-${idx}`}>{col}</span>
                ))}
            </div>
            {data.map((item, index) => (
                <div key={index} className="price-row">
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