import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Home from '../Home';
import { theme } from '@monorepo-poc/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
