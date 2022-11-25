import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './Home';

const StyledApp = styled.div`
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
