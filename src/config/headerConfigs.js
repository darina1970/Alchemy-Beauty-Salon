export const headerConfigs = {
    home: {
        backgroundClass: 'homeBg',
        menuItems: [
            {label: 'НАШИ МАСТЕРА', href: '/masters'},
            {label: 'УСЛУГИ', href: '/services'},
            {label: 'АКЦИИ', href: '#promos'},
            {label: 'КОНТАКТЫ', href: '#contacts'},
        ],
    },
    masters: {
        backgroundClass: 'mastersBg',
        backgroundSrc: '../assets/images/masters-bg.jpg',
        menuItems: [
            {label: 'ГЛАВНАЯ', href: '/'},
            {label: 'УСЛУГИ', href: '/services'},
            {label: 'КОНТАКТЫ', href: '#contacts'},
        ],
    },
    services: {
        backgroundClass: 'servicesBg',
        backgroundSrc: '../assets/images/services-bg.jpg',
        menuItems: [
            {label: 'ГЛАВНАЯ', href: '/'},
            {label: 'МАСТЕРА', href: '/masters'},
        ],
    },
};