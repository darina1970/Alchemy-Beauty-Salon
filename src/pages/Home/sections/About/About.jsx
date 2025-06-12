import React from 'react';
import styles from './About.module.css';

const About = ({ variant }) => {
    return (
        <section className={`section section-${variant}`}>
            <div className="container">
                <h2>О нас</h2>
                <p className={styles.text}>Мы — лесная лаборатория красоты 🌿✨</p>
                <a href="#" className='btn-primary'>Познакомиться с мастером</a>
                <a href="#" className='btn-secondary'>Познакомиться с мастером</a>
            </div>
        </section>
    );
};

export default About;