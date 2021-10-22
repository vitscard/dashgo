import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { theme } from '../styles/theme';


export default class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />          
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          {/* para usar o modo de cor do chakra */}
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}
