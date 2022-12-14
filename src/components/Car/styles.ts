import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: ${RFValue(126)}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
`;
export const Detail = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;
export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;

  margin-top: 16px;
`;
export const Rent = styled.View`
  margin-right: 24px;
`;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};
`;
export const CarImage = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(115)}px;
`;
