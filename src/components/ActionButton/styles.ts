import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface containerProps {
  color?: string;
  background?: string;
  active?: boolean;
}

export const Container = styled(RectButton)<containerProps>`
  width: 100%;
  height: ${RFValue(56)}px;
  color: ${({ theme, color }) => (color ? color : theme.colors.background_secondary)};
  background-color: ${({ theme, background }) => (background ? background : theme.colors.main)};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<containerProps>`
  color: ${({ theme, color }) => (color ? color : theme.colors.background_secondary)};
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${RFValue(15)}px;
`;
