import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { headerConfigs } from '../../config/headerConfigs';
import MasterCard from './MasterCard';
import master1 from '../../assets/images/MasterPage/master-img1.webp';
import master2 from '../../assets/images/MasterPage/master-img2.webp';
import master3 from '../../assets/images/MasterPage/master-img3.webp';
import master4 from '../../assets/images/MasterPage/master-img4.webp';
import master5 from '../../assets/images/MasterPage/master-img5.webp';


const masters = [
    {
      name: 'Анастасия',
      description: 'Парикмахер. Колорист-эксперт. Преподаватель. Женский мастер. Основатель “Алхимии”',
      title: 'Опыт работы 10 лет',
      content: [
        { type: 'paragraph', text: 'Индивидуальный подбор цвета и техники окрашивания исходя из особенностей цветотипа и других внешних и внутренних данных клиента.' },
        { type: 'paragraph', text: 'Окрашивания любой сложности — эксперт по сложным техникам, выход из черного, смывки, преподаватель, создатель авторского курса "Колорист с нуля".' }
      ],
      image: master1,
      variant: 'light',
      links: {
        booking: 'https://dikidi.net/booking/alina-magic',
        whatsapp: 'https://wa.me/79137835046',
      },
    },
    {
      name: 'Ирина Дуганова',
      description: 'Парикмахер-универсал',
      title: 'Опыт работы 19 лет',
      content: [
        { type: 'paragraph', text: 'Стрижки мужские, женские, окрашивания любой сложности,  биозавивка.' },
        { type: 'paragraph', text: 'Постоянные обучения и повышения квалификации, высокий уровень мастерства.' }
      ],
      image: master2,
      variant: 'dark',
      links: {
        booking: 'https://dikidi.net/booking/alina-magic',
        whatsapp: 'https://wa.me/79137835046',
      },
    },
    {
      name: 'Ирина Торосян',
      description: 'Мастер-колорист. Женский мастер.',
      title: 'Опыт работы 4 года',
      content: [
        { type: 'title', text: 'Обучение: индивидуальный курс у топ-мастера студии' },
        { type: 'paragraph', text: 'Окрашивания любой сложности, эксперт по работе с блондом' },
        { type: 'quote', text: 'Некрасивых женщин не бывает, бывают те, кто неправильно выбрал мастера по волосам.' }
      ],
      image: master3,
      variant: 'light',
      links: {
        booking: 'https://dikidi.net/booking/alina-magic',
        whatsapp: 'https://wa.me/79137835046',
      },
    },
    {
      name: 'Галина',
      description: 'Мастер-универсал, барбер',
      title: 'Опыт работы 2+ года',
      content: [
        { type: 'title', text: 'Обучение: школа Галины Гуковой' },
        { type: 'paragraph', text: 'Высококлассный специалист по мужским стрижкам. Фейды, бороды, идеальные переходы, стрижки любой сложности.' },
        { type: 'paragraph', text: 'Женские стрижки на длинные волосы, идеальное каре, окрашивания волос.' },
        { type: 'quote', text: 'Подберу лучший вариант стрижки и окрашивания, согласно структуре волос и цветотипу клиента' }
      ],
      image: master4,
      variant: 'dark',
      links: {
        booking: 'https://dikidi.net/booking/alina-magic',
        whatsapp: 'https://wa.me/79137835046',
      },
    },
    {
        name: 'Алина',
        description: 'Мастер маникюра, бровист, косметолог',
        title: 'Опыт работы 10 лет',
        content: [
          { type: 'paragraph', text: 'Индивидуальный подбор цвета и техники окрашивания исходя из особенностей цветотипа и других внешних и внутренних данных клиента.' },
        ],
        image: master5,
        variant: 'light',
        links: {
          booking: 'https://dikidi.net/booking/alina-magic',
          whatsapp: 'https://wa.me/79137835046',
        },
      },
  ];

  const mastersBackgrounds = [
  '/images/Banners/Masters/masters-desktop.webp',
  '/images/Banners/Masters/masters-tablet.webp',
];


  
const MastersPage = () => {

  // Прелоад баннеров
  
    useEffect(() => {
      mastersBackgrounds.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, []);
  

    return (
        <MainLayout headerProps={headerConfigs.masters}>
            <section className="masters">
        {masters.map((master, i) => (
          <MasterCard key={i} {...master} />
        ))}
      </section>
        </MainLayout>
    );
};

export default MastersPage;