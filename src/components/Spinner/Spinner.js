import React from 'react';
import styles from './Spinner.module.scss';
import spinner from '../../assets/spinner.gif';

export default function Spinner() {
    return (
        <figure className={styles.Spinner}>
            <img src={spinner} alt="loading"/>
            <p>Loading data...</p>
        </figure>
    )
}
