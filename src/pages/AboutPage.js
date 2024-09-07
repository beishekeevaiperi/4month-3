import React from 'react';
import Description from '../components/Description';
import styles from './aboutPage.module.css';

const AboutPage = () => {
    const data = {
        title: 'Title 2',
        description: 'description 2'
    };

    return (
        <div className={styles.page}>
            <h1>About Page</h1>
            <Description info={data} />
        </div>
    );
};

export default AboutPage;
