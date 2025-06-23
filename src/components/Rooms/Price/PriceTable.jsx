const PriceTable = ({ data }) => (
    <div className="price-table">
        {data.map((item, index) => (
        <div key={index} className="price-row">
            <span className="price-title">{item.title}</span>
            <span className="price-value">{item.price}</span>
        </div>
        ))}
    </div>
);

export default PriceTable;