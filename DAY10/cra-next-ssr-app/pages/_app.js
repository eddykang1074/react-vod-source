import React from 'react';
import Link from 'next/link';
import Head from "next/head";

const App = ({ Component, pageProps }) => {
    return (
    <>
        <Head>
            <title>SEO-기본 페이지 제목</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <meta name="description" content="기본 페이지 SEO 설명문구" />
            <meta name="keywords" content="기본 페이지 SEO 키워드 문구" />
            <meta name="author" content="엠소프트웨어" />
			
            <link rel="shortcut icon" href="/favicon.png" />
        </Head>

        <ui>
            <li>
                <Link href="/">홈</Link>
            </li>
            <li>
                <Link href="/solution">Solution</Link>
            </li>
            <li>
                <Link href="/platform">MixedCode</Link>
            </li>
            <li>
                <Link href="/company">MSoftware</Link>
            </li>
        </ui>


        <Component {...pageProps} />

    </>
    );
};

export default App;


