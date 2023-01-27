
import Header from '@components/structure/header/Header';
import Layout from '@components/structure/layout/main/Layout';
import Home from '@components/structure/pages/public/home/Home';
import HeadTag from '@structure/headTag/HeadTag';

const page: string = "home";
const current: string = page;
const subcurrent: string = '';
const lang = "fr";

let defaultSeo = {
    "metaTitle": `HEXACRIT`,
    "metaDescription": "Association loi 1901 agissant autour du jeu-vidéo et de l'organisation d'événements",
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

const HomePage = ({ seo }: any) => {
    return (
        <Layout
            header={true}
            footer={true}
            current={current}
            subcurrent={subcurrent}
            lang={lang}
            menu={{}}
            page={page}
        >
            {!!seo &&
                <HeadTag
                    page={page}
                    lang={lang}
                    seo={defaultSeo}
                />
            }
            <p style={{textAlign: 'center', marginTop: "20px"}}>Ce site est en cours de construction, merci de votre patience.</p>
            <Home />
        </Layout>
    )
}

export default HomePage;