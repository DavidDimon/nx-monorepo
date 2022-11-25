import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { ITheme } from '@monorepo-poc/theme';
import { sum } from '@monorepo-poc/services';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.backgroundColor || '#fff'};
`;

const Input = styled.TextInput`
  border: 1px solid #777;
  border-radius: 8px;
  width: 200px;
  padding: 12px;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #777;
  padding: 16px;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

const Home = () => {
  const [value, setValue] = React.useState<number>(0);
  const [value2, setValue2] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);

  return (
    <Wrapper>
      <Input
        type="number"
        value={value}
        onChangeText={(text) => setValue(Number(text))}
      />
      <Input
        type="number"
        value={value2}
        onChangeText={(text) => setValue2(Number(text))}
      />

      <Button onPress={() => setResult(sum(value, value2))}>
        <Text>Sum</Text>
      </Button>

      <Text>The result is: {result}</Text>
    </Wrapper>
  );
};

export default Home;
