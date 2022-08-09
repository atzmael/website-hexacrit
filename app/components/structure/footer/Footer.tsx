import React from "react";

import styles from "./styles.module.scss";

interface FooterI {
    page: string,
    lang: string,
    data?: any
}

const Footer = ({ page, lang }: FooterI) => {

    const copyrightsYear: string = '2022-' + new Date().getFullYear();

    return (
        <footer id="mainFooter" className={styles['main-footer']}>
        </footer>
    )
}

export default Footer;