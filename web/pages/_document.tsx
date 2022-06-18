import { Head, Html, Main, NextScript } from "next/document"
import type { FunctionComponent } from "react"

const Document: FunctionComponent = () => (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />
        </Head>
        <body>
                <Main />
                <NextScript />
        </body>
    </Html>
)

export default Document
