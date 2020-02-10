import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  border-color: #eee;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  padding: 0 15px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
`;
