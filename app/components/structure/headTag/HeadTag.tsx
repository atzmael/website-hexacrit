import Head from 'next/head';

interface HeadTagsInt {
    seo: any;
    page: string;
    lang?: string;
    translation?: any;
    bot?: string;
}

const HeadTag = ({ seo, page, lang, translation, bot }: HeadTagsInt) => {

    const structuredData: any = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": process.env.URL_WEBSITE,
        "address": {},
        "name": translation[lang].global.brand,
        "logo": process.env.URL_WEBSITE + "/assets/images/brand/logo.png",
        "sameAs": [
            process.env.URL_LINKEDIN,
            process.env.URL_TWITTER,
        ]
    }

    return (
        <Head>
            <title>{!!seo && !!seo.title ? seo.title : ``}</title>
            <meta name="description" content={!!seo.desc && seo.desc} />
            <meta name="keywords" content={!!seo.kw && seo.kw} />

            <meta property="og:title" content={!!seo.og.title && seo.og.title} />

            {/*
                <title>{translation[lang][page].metas.title} | {translation[lang].global.brand } {translation[lang].global.claim } </title>
                <meta name="description" content={translation[lang][page].metas.description} />
                <meta name="keywords" content={translation[lang][page].metas.keywords} />
                <meta property="og:title" content={translation[lang][page].og.title} /> */}

            {/* <link rel="dns-prefetch" href="https://www.google-analytics.com" /> */}
            <link rel="preconnect" href="https://www.google-analytics.com" />

            {/* <link rel="dns-prefetch" href="https://www.googletagmanager.com" /> */}
            <link rel="preconnect" href="https://www.googletagmanager.com" />

            {/* <link rel="dns-prefetch" href="https://consent.cookiebot.com" /> */}
            <link rel="preconnect" href="https://consent.cookiebot.com" />

            {/* <link rel="dns-prefetch" href="https://consentcdn.cookiebot.com" /> */}
            <link rel="preconnect" href="https://consentcdn.cookiebot.com" />

            <link rel="preload" href="/assets/css/fonts.css" as="style" />


            <meta property="og:type" content="page" />
            <meta property="og:url" content={process.env.URL_WEBSITE + translation[lang].menu[page]?.link} />
            <meta property="og:image" content={!!seo.og.img && seo.og.img} />
            {/* <meta property="og:image" content={process.env.URL_WEBSITE + "/assets/images/opengraph/facebook.png"} /> */}
            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:site" content={process.env.URL_WEBSITE + translation[lang].menu[page]?.link} />
            <meta name="twitter:creator" content={"@" + process.env.ACCOUNT_TWITTER} />
            <meta property="twitter:image" content={!!seo.twitter.img && seo.twitter.img} />
            {/* <meta property="twitter:image" content={process.env.URL_WEBSITE + "/assets/images/opengraph/twitter.png"} /> */}

            <link rel="alternate" hrefLang="en" href={translation.shared.url.prod} />
            <link rel="alternate" hrefLang="fr" href={translation.shared.url.prod + "/fr"} />

            <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
            <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
            <link rel="icon" type="image/png" href="/assets/favicon/favicon-32x32.png" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />

            <meta name="google" content="notranslate" />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {!!bot && bot !== '' &&
                <meta name="robots" content={bot} />
            }
        </Head>
    )
}

export default HeadTag;