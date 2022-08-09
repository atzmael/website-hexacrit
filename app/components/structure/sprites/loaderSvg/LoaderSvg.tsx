import React, { ReactNode } from "react";

type svgProps = {
    svgId?: string;
    svg?: ReactNode;
    icon?: string;
    className?: string;
    color?: string;
    viewBox?: string;
}

const LoaderSvg = ({
    svgId,
    svg,
    icon,
    className,
    color,
    viewBox
}: svgProps) => {

    if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
        // console.log("svg")
        // console.log(svg)
    }

    return (
        <>{svg}</>
    );
};

export default LoaderSvg;