import { Dimensions } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface DotProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexs = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 24px;
  align-self: flex-end;
`;
export const ImageIndex = styled.View<DotProps>`
  width: ${RFValue(6)}px;
  height: ${RFValue(6)}px;
  border-radius: ${RFPercentage(50)}px;
  background-color: ${({ theme, active }) => (active ? theme.colors.title : theme.colors.shape)};

  margin-left: 8px;
`;
export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(113)}px;

  justify-content: center;
  align-items: center;
`;
export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
