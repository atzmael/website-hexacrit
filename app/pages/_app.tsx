import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import NavigationProvider from '@components/structure/context/NavigationProvider';
import { useEffect, useState } from 'react';

import '../public/assets/css/basic.css';

declare global {
    interface Window {
    }
}

let optionsSwr: any = {
    //refreshInterval: 0
}

const OwnApp = ({ Component, pageProps }: AppProps) => {

    const [isLoading, setIsLoading] = useState<boolean>();

    const router = useRouter();

    useEffect(() => {

        const handleStart = (url: string) => {
            //router.events.emit('routeChangeError')
            // GTMPageView(url); // GOOGLE ANALYTICS

            setIsLoading(true);

            //PageView(url); MATOMO

            if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
                console.log(`Loading: ${url}`)
            }
        }
        const handleStop = () => {
            setIsLoading(false);
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router]);

    if (!!pageProps.fallback) {
        optionsSwr.fallback = pageProps.fallback;
    }

    return (
        <NavigationProvider>
            <Component {...pageProps} />
        </NavigationProvider>
    )
}

export function reportWebVitals(metrics: NextWebVitalsMetric) {
    if (!!process.env.ENV && process.env.ENV !== 'prodcution') {
        console.debug(metrics);

    } else {
        if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
            console.debug(metrics);
        }
    }
    // console.debug(metrics);

    switch (metrics.name) {

        case 'Next.js-hydration':
            // handle hydration results
            break
        case 'Next.js-route-change-to-render':
            // handle route-change to render results
            break
        case 'Next.js-render':
            // handle render results
            break
        case 'FCP':
            // handle FCP results
            break
        case 'LCP':
            // handle LCP results
            break
        case 'CLS':
            // handle CLS results
            break
        case 'FID':
            // handle FID results
            break
        case 'TTFB':
            // handle TTFB results
            break
        default:
            break
    }
}




export default OwnApp;
