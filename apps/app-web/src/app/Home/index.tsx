import React from 'react';
import styled from 'styled-components';

import { ITheme } from '@monorepo-poc/theme';
import { sum } from '@monorepo-poc/services';

const Container = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.backgroundColor || '#fff'};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [value, setValue] = React.useState<number>(0);
  const [value2, setValue2] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);

  return (
    <Container>
      <Wrapper>
        <input
          type="number"
          value={Number(value)}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <br />
        <input
          type="number"
          value={Number(value2)}
          onChange={(e) => setValue2(Number(e.target.value))}
        />
        <br />

        <button onClick={() => setResult(sum(value, value2))}>Sum</button>

        <h2>The result is: {result}</h2>
      </Wrapper>
    </Container>
  );
};

export default Home;
