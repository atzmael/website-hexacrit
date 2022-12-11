import React, { createContext, useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";

import useScrollingUp from '@hooks/useScrolllingUp';

export const NavigationContext = createContext({
    isMenuOpen: false,
    widthScreen: 0,
    scrollPosY: 0,
    scrollDirectionUp: false,
    toggleMenu: () => { },
});

const NavigationProvider = (props: any) => {
    const [menuOpenState, setMenuOpenState] = useState(false);

    const scrolled: any = useScrollingUp();
    const [directionScroll, setDirectionScroll] = useState(false);
    const [positionScroll, setPositionScroll] = useState(0);

    const [widthScreenState] = useWindowSize({ leading: true, initialWidth: 960 });
    const [realWidth, setRealWidth] = useState<number>(0);

    useEffect(() => {
        // if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
        //   console.log("scrolled:", scrolled.directionUp);
        // }
        setDirectionScroll(scrolled.directionUp);
    }, [scrolled.directionUp]);

    useEffect(() => {
        // if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
        //   console.log("scrolled positionScroll:", scrolled.positionScroll);
        // }
        setPositionScroll(scrolled.positionScroll);
    }, [scrolled.positionScroll]);

    useEffect(() => {
        if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
            //console.log("widthScreenState:", widthScreenState);
        }
        setRealWidth(widthScreenState);
    }, [widthScreenState]);

    return (
        <NavigationContext.Provider value={{
            isMenuOpen: menuOpenState,
            widthScreen: realWidth,
            scrollPosY: positionScroll,
            scrollDirectionUp: directionScroll,
            toggleMenu: () => setMenuOpenState(!menuOpenState),
        }}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider;