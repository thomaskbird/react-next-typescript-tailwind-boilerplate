import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { getUtilityTheme } from '@mcansh/powerley-utils';
import { generateCSSCustomProperties } from '@mcansh/powerley-components';

import { useServiceWorker } from '~/hooks/use-service-worker';

const GlobalStyle = createGlobalStyle`
  :root {
    ${props => generateCSSCustomProperties(props.theme)};
  }
`;

const Layout: React.FC = ({ children }) => {
  useServiceWorker();

  const theme = getUtilityTheme('dtei');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export { Layout };
