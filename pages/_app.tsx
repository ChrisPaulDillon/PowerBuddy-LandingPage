import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import React from 'react';
import '../public/static/slick.css'

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
};

// 3. extend the theme
const customTheme2 = extendTheme({ config, ...theme });

const MyApp = ({ Component }) => {
  return (
      <ChakraProvider resetCSS theme={theme}>
          <Component compo />
      </ChakraProvider>
  );
};

export default MyApp;
