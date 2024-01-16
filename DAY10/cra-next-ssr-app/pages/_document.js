import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {

    //모든 페이지 컴포넌트에서 data fetching이 필요한 경우를 위해 선언
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="ko">
				<Head>
                    {/* <meta charSet="utf-8" /> */}
                </Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;