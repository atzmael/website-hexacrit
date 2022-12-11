// import loadable from '@loadable/component';
import React, { useEffect, useState, lazy, Suspense } from 'react';

import svg from './styles.module.scss';

interface svgProps {
    svgItems: svgItems[],
    presence?: boolean
}
export interface svgItems {
    icon?: string;
    className?: string;
    color?: string;
    viewBox?: string;
}

const SvgSprite = ({
    svgItems,
    presence
}:
    svgProps
) => {

    const [symbols, setSymbols] = useState([]);
    useEffect(() => {
        if (!!svgItems && 0 < svgItems.length) {
            const tmp: any = [];
            svgItems.forEach((si: any, i: number) => {
                const SvgComponent = lazy(() => import('./symbols/' + si.icon + '/' + si.icon));
                tmp.push(
                    <Suspense fallback={''} key={`svg_${si.icon}_${i}`}>
                        <symbol key={si.icon} id={si.icon} className={si.className} viewBox={si.viewBox}>
                            <SvgComponent svgId={si.icon} />
                        </symbol>
                    </Suspense>
                );
            })
            setSymbols(tmp);
        }
    }, [svgItems]);

    return (
        (!!svgItems && svgItems.length > 0) ?
            <svg className="defs-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                {symbols}
            </svg>
            :
            null
    )
}

export default SvgSprite;