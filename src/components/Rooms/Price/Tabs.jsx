const Tabs = ({ tabs, activeTab, onTabClick }) => (
    <div className="tabs">
        {tabs.map(tab => (
        <button
            key={tab.key}
            className={`tab ${tab.key === activeTab ? 'active' : ''}`}
            onClick={() => onTabClick(tab.key)}
        >
            {tab.label}
        </button>
        ))}
    </div>
);

export default Tabs;