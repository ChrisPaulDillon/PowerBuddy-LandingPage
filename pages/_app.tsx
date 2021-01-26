import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import '../public/static/slick.css'
import React from 'react';
import { NextComponentType } from 'next';
import NextApp, { AppContext, AppProps } from 'next/app';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
};

// 3. extend the theme
const customTheme2 = extendTheme({ config, ...theme });


export interface ModifiedAppInitialProps<A = { [key in string]: string }> {
  appProps: A;
}

export interface ExtendedAppProps<P = { [key in string]: string }, A = { [key in string]: string }> extends AppProps<P>, ModifiedAppInitialProps<A> {}

const MyApp : NextComponentType<AppContext, ModifiedAppInitialProps, ExtendedAppProps> = ({ Component, pageProps, appProps }) => {
  return (
      <ChakraProvider resetCSS theme={theme}>
          <Component {...appProps} {...pageProps} />
      </ChakraProvider>
  );
};

MyApp.getInitialProps = async () => {
  return {
    appProps: {
      /* ...someAppProps */
    },
  };
};
export default MyApp;
