import React from 'react';
import Description from '../components/Description';
import styles from './mainPage.module.css';

const MainPage = () => {
    const data = {
        title: 'Title',
        description: 'description'
    };

    return (
        <div className={styles.page}>
            <h1>Main Page</h1>
            <Description info={data} />
        </div>
    );
};

export default MainPage;
