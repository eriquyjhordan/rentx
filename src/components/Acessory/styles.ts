import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFValue(95)}px;
  height: ${RFValue(92)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: ${RFValue(16)}px;

  margin-bottom: ${RFValue(8)}px;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(8)}px;
`;
