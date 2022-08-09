import Layout from "@components/structure/layout/main/Layout";



const ErrorPage = () => {


    const page: string = "404";
    const current: string = page;
    const subcurrent: string = null;
    const lang = "en";

    let dataSeo = {
        "metas": {
            "title": "★ Page not found | Viva Technology ★",
            "description": "VivaTech is the world’s rendezvous for startups and leaders to celebrate innovation. It’s a gathering of the world’s brightest minds, talents, and products.",
            "keywords": "",
            "focuskw": ""
        }
    }


    if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
        // console.log('404 PAGE ', data);
        // console.log('DATA : ', data);
        // console.log('MENUS : ', menus);
        // console.log('PAGE : ', slug_page);
    }
    return (
        <Layout
            header={true}
            footer={true}
            current={!!current && current}
            subcurrent={!!subcurrent && subcurrent}
            lang={lang}
            menu={null}
        >
            <h2>Error page</h2>
        </Layout>
    )
}

export default ErrorPage;