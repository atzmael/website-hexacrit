import React, { useEffect } from 'react';
import styles from "./styles.module.scss";

const mainHeader = [
    {
        label: ""
    }
]
export interface HeaderInterface {
    page: string,
    lang: string,
    data?: any
}

const Header = ({ page, lang }: HeaderInterface) => {

    useEffect(() => {
        if (!!document.querySelector('#__next > p')) {
            document.querySelector('#__next > p')!.remove();
        }
    }, [])

    return (
        <header id="mainHeader" className={`${styles["header"]}`}>
            {/* <nav></nav> */}
            <div className={styles['header-logo']}>
                <img src='/assets/medias/logo/logo_x60.png' alt="logo" />
            </div>
        </header>
    )
}

export default Header