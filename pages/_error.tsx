import React, { useEffect, useState } from 'react';
import Layout from "@components/structure/layout/main/Layout";
import Error from 'next/error';



const ErrorPage = ({ data, query, errorCode }: any) => {



    const page: string = "error";
    const current: string = page;
    const subcurrent: string = '';
    const lang = "en";

    let dataSeo = {
        "metas": {
            "title": "★ ErrorPage |  ★",
            "description": "",
            "keywords": "",
            "focuskw": ""
        }
    }

    // if (!!process.env.IS_DEBUG && process.env.IS_DEBUG === 'true') {
    //     console.log('ERROR PAGE', data);
    // }
    return (
        <Layout
            header={true}
            footer={true}
            current={current}
            subcurrent={subcurrent}
            lang={lang}
            menu={null}
            page={page}
        >
            <Error statusCode={404} />
        </Layout>
    )
}


export default ErrorPage;