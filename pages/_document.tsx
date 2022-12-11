import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
// import FacilityBody from "@components/extensions/faciliti/FacilityBody";
// import GFLHead from '@components/extensions/googlefloodlight/GoogleFloodlightHead';

interface DocumentProps {
  lang_value?: string
  lang_code?: string;
  skip?: string;
  isIE?: boolean;
}


class OwnDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const additionalProps = { lang: '', lang_code: '', lang_value: '', skip: '', isIE: false, ua: '' };

    additionalProps.lang = 'en';
    additionalProps.lang_value = 'en';
    additionalProps.lang_code = 'en_US';
    additionalProps.skip = 'Skip to main content';

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...additionalProps }
  }

  constructor(props: any) {
    super(props);
  }


  render() {
    return (
      <Html
        lang={this.props.lang_value}
        className="own-html no-js"
        data-lang={this.props.lang_code}
      >
        <Head>
          <link rel="preconnect" href={`${process.env.URL_CDN}`} crossOrigin="anonymous" />
          <link
            href={`${process.env.URL_CDN}/assets/css/fonts${process.env.ENV === 'localhost' ? '-local' : ''}.css`}
            rel="stylesheet"
          />
        </Head>
        <body id="bodySite" itemScope itemType="http://schema.org/WebPage">
          <div id="markerScroll"></div>
          <a className="skip-main btn-no-text" href="#mainSections">
            <span className="btn-label">{this.props.skip}</span>
          </a>
          {/* {!!process.env.ID_GOOGLETAGMANAGER &&
            <GTMBody
              GTMId={GTM_ID}
              GTMUrl={GTM_URL}
            />
          } */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default OwnDocument;
