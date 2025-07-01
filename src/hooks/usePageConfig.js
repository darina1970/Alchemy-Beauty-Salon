import { useLocation } from 'react-router-dom';
import { headerConfigs } from '../config/headerConfigs';
import { footerQuotes } from '../config/footerQuotes';

// Возвращает ключ конфигурации по пути
const getPageKey = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.includes('/masters')) return 'masters';
    if (pathname.includes('/services')) {
        if (pathname === '/services') return 'services';
        return 'rooms';
    } 
    if (pathname.includes('/room')) return 'rooms';   
    return 'default';
};

// Главный хук для получения конфигурации
export const usePageConfig = () => {
    const { pathname } = useLocation();
    const pageKey = getPageKey(pathname);

    const headerConfig = headerConfigs[pageKey] || {};
    const quote = footerQuotes[pageKey] || footerQuotes.default;

    return {
        pageKey,
        menuItems: headerConfig.menuItems || [],
        backgroundClass: headerConfig.backgroundClass || '',
        titlePrefix: headerConfig.titlePrefix || '',
        quote,
    };
};