import React, { useContext, useEffect } from "react";
import dynamic from 'next/dynamic';
import PropTypes from "prop-types";
import { checkUrlParameters } from "@components/utils/Url";
import { NavigationContext } from "../../context/NavigationProvider";
import NavTouch from "@components/structure/navigation/navTouch/NavTouch";
import Header from "@components/structure/header/Header";
import Footer from "@components/structure/footer/Footer";
import SvgSprite, { svgItems } from "@components/structure/sprites/Sprites";

import { useInView } from 'react-intersection-observer';

import styles from "./styles.module.scss";

// import { useCookies } from 'react-cookie';
// import LayoutResponsive from "@components/structure/layout/placeholder/responsive/Layout";
// import LayoutIE from "@components/structure/layout/placeholder/internetExplorer/Layout";

const DynamicFooter = dynamic(
    () => import('@components/structure/footer/Footer'),
    { loading: () => <p>...</p> }
)

interface LayoutProps {
    children?: any;
    current: string;
    subcurrent: string;
    lang: string;
    page: string;
    mode?: string;
    tracker?: string;
    chapter1?: string;
    regions?: any;
    header: boolean;
    footer: boolean;
    menu: any;
}

const svgArray: svgItems[] = [
    {
        icon: 'LogoHexacrit',
        color: 'currentColor',
        viewBox: '0 0 2048 2048'
    }
];

const Layout = ({
    mode,
    header,
    footer,
    children,
    current,
    subcurrent,
    lang,
    page,
    tracker,
    chapter1,
    regions,
    menu
}:
    LayoutProps
) => {

    const { widthScreen } = useContext(NavigationContext);

    const [foldRef, inViewFold] = useInView({
        threshold: 1,
        triggerOnce: false,
    });

    useEffect(() => {
        checkUrlParameters();
    }, []);

    return (
        <div id="layoutApp" data-page={chapter1} className={styles.layout}>
            <div className={styles.layout_inner}>
                {!!widthScreen && widthScreen < 768 &&
                    <NavTouch menu={menu} current={current} subcurrent={subcurrent} page={page} lang={lang} />
                }
                {!!header &&
                    <Header page={page} lang={lang} />
                }
                <div className={styles['fold']} ref={foldRef}></div>
                {children}
                {!!footer &&
                    <Footer page={page} lang={lang} />
                }
                <SvgSprite svgItems={svgArray} presence={true} />
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;