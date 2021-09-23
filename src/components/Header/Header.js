import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.Header}>
            <p>Hello, John Doe</p>
            <AccountCircleIcon/>
        </header>
    )
}
