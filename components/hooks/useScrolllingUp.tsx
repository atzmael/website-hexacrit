import { useEffect, useState } from 'react';
import { off, on } from '@utils/UpDown';

/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */
const useScrollingUp = () => {
  let prevScroll:number;
  //if it is SSR then check you are now on the client and window object is available
  if (process.browser) {
    prevScroll = window.pageYOffset;
  }

  const [scrollingUp, setScrollingUp] = useState(false);
  const [currentScrollPositionY, setCurrentScrollPositionY] = useState(0);

  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll > currScroll;
    setScrollingUp(isScrolled);
    prevScroll = currScroll;
  }


  const watchScroll = () => {
    const currScrollY = window.pageYOffset;
    setCurrentScrollPositionY(currScrollY);
  }

  useEffect(() => {
    on(window, 'scroll', watchScroll, { passive: true });
    on(window, 'scroll', handleScroll, { passive: true });
    return () => {
      off(window, 'scroll', watchScroll, { passive: true });
      off(window, 'scroll', handleScroll, { passive: true });
    }
  }, []);

  return {directionUp: scrollingUp, positionScroll: currentScrollPositionY};
}

export default useScrollingUp;