import React from 'react';
import styles from './style.module.css'

const Advantages = (props) => {

    const {
        icon,
        title
    } = props

    return (
        <div className={styles.advantages}>
            <div className={styles.circle}>
                <img src={icon} alt=""/>
            </div>
            <h3 className={styles.title}>
                {title}
            </h3>
        </div>
    );
};

export default Advantages;