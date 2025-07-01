export const headerConfigs = {
    home: {
        backgroundClass: 'homeBg',
        titlePrefix: 'ЛАБОРАТОРИЯ КРАСОТЫ',
        menuItems: [
            {label: 'НАШИ МАСТЕРА', href: '/masters'},
            {label: 'УСЛУГИ', href: '/services'},
            {label: 'АКЦИИ', href: '#promos'},
            {label: 'КОНТАКТЫ', href: '#contacts'},
        ],
    },
    masters: {
        backgroundClass: 'mastersBg',
        titlePrefix: 'МАСТЕРА Лаборатории Красоты',
        backgroundSrc: '../assets/images/masters-bg.jpg',
        menuItems: [
            {label: 'ГЛАВНАЯ', href: '/'},
            {label: 'УСЛУГИ', href: '/services'},
            {label: 'КОНТАКТЫ', href: '/#contacts'},
        ],
    },
    services: {
        backgroundClass: 'servicesBg',
        titlePrefix: 'УСЛУГИ Лаборатории Красоты',
        backgroundSrc: '../assets/images/services-bg.jpg',
        menuItems: [
            {label: 'ГЛАВНАЯ', href: '/'},
            {label: 'НАШИ МАСТЕРА', href: '/masters'},
            {label: 'КОНТАКТЫ', href: '/#contacts'},
        ],
    },
    rooms: {
        backgroundClass: 'roomsBg',
        menuItems: [
            {label: 'ГЛАВНАЯ', href: '/'},
            {label: 'НАШИ МАСТЕРА', href: '/masters'},
            {label: 'УСЛУГИ', href: '/services'},
        ]
    }
};