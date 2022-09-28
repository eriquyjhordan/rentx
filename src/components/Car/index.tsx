import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import ElectricSvg from '../../assets/Energy.svg';
import GasolineSvg from '../../assets/Gasoline.svg';
import { Container, Detail, Brand, Name, About, Rent, Period, Price, CarImage } from './styles';

export interface CarData {
  brand: string;
  name: string;
  carType: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function Car({ data }: Props) {
  return (
    <Container>
      <Detail>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          {data.carType === 'electric' ? (
            <ElectricSvg width={RFValue(20)} height={RFValue(20)} />
          ) : (
            <GasolineSvg width={RFValue(20)} height={RFValue(20)} />
          )}
        </About>
      </Detail>
      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
