import React, { useEffect } from 'react';
import styles from "./styles.module.scss";


export interface HeaderInterface {
    page: string,
    lang: string,
    data?: any
}

const Header = ({ page, lang }: HeaderInterface) => {

    useEffect(() => {
        if (document.querySelector('#__next > p')) {
            document.querySelector('#__next > p').remove();
        }
    }, [])

    return (
        <header id="mainHeader" className={`${styles["header"]}`}>
        </header>
    )
}

export default Header