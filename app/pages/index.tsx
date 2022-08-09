
import BlocPresentation from '@components/elements/BlocPresentation/BlocPresentation';
import Layout from '@components/structure/layout/main/Layout';
import HeadTag from '@structure/headTag/HeadTag';

const page: string = "home";
const current: string = page;
const subcurrent: string = null;
const lang = "en";

let defaultSeo = {
    "metaTitle": ``,
    "metaDescription": "",
    "keywords": "",
    "canonicalURL": "",
    "metaSocial": [
        {
            "socialNetwork": "Facebook",
            "title": "",
            "description": "",
            "image": {
                "data": {
                    "attributes": {
                        "url": ""
                    }
                }
            }
        },
        {
            "socialNetwork": "Twitter",
            "title": "",
            "description": "",
            "image": {
                "data": {
                    "attributes": {
                        "url": ""
                    }
                }
            }
        }
    ]
}

const HomePage = ({ seo }) => {
    return (
        <Layout
            header={true}
            footer={true}
            current={!!current && current}
            subcurrent={!!subcurrent && subcurrent}
            lang={lang}
            menu={{}}
        >
            {!!seo &&
                <HeadTag
                    page={page}
                    lang={lang}
                    seo={!!seo && 'ok' === seo.status && !!seo.generic ? seo.generic.seo : defaultSeo}
                />
            }
            {/* HERE GOES CONTENT */}
            <BlocPresentation>
                <h2>COUCOU 2</h2>
            </BlocPresentation>
        </Layout>
    )
}

export default HomePage;