import React from 'react';
import styles from './About.module.css';

const About = ({ variant }) => {
    return (
        <section className={`${styles.section} section section-${variant}`}>
            <h2>О нас</h2>
            <p>Мы — лесная лаборатория красоты 🌿✨</p>
            <a href="#" className='btn-primary'>Записаться</a>
        </section>
    );
};

export default About;