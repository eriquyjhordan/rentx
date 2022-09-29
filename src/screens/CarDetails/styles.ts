import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: ${RFValue(35)}px;
`;
export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Description = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_detail};
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Rent = styled.View``;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_detail};
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(16)}px;
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
  margin-top: ${RFValue(23)}px;
  line-height: ${RFValue(25)}px;
`;
