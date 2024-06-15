import React from 'react';
import styles from './style.module.css'

const News = (props) => {

    const {
        image,
        text
    } = props

    return (
        <div className={styles.flex}>
            <p>{text}</p>
            <div className={styles.image}>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default News;