import Layout from "@components/structure/layout/main/Layout";
// import Error404Page from "@components/structure/pages/shared/errors/Error404Page";
// import axios from 'axios';

const ErrorPage = () => {
    // const [menu, setMenu] = useState<any>({})

    // const getMenu = async () => {
    //     const { data }: any = await axios.get(`${process.env.URL_WEBSITE}/api/menu`);
    //     setMenu({menu_main: data.data.menuMain, menu_top: data.data.menuTop, menu_footer_main: data.data.menuFooterMain, menu_footer_secondary: data.data.menuFooterSecondary});
    // }

    // useEffect( () => {
    //     getMenu();
    // }, []);

    const page: string = "500";
    const current: string = page;
    const subcurrent: string = null;
    const lang = "en";

    let dataSeo = {
        "metas": {
            "title": "",
            "description": "",
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
            <h2>500 page</h2>
        </Layout>
    )
}

export default ErrorPage;