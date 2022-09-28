import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/Logo.svg';
import { Car, CarData } from '../../components/Car';
import { Container, Header, HeaderContainer, TotalCars } from './styles';

export function Home() {
  const carData: CarData[] = [
    {
      brand: 'Audi',
      name: 'RS 5 Coupé',
      carType: 'gasoline',
      rent: {
        period: 'Ao dia',
        price: 120,
      },
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHHU4KyunUgjAHXQC8t48rsk04UaZPsks6g&usqp=CAU',
    },
    {
      brand: 'Porsche',
      name: 'Panamera',
      carType: 'electric',
      rent: {
        period: 'Ao dia',
        price: 140,
      },
      thumbnail:
        'https://pensecarros.com.br/cms/uploads/porsche-panamera-2-9-v6-e-hybrid-4-platinum-edition-pdk-61d8f268bc77c.png',
    },
  ];

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContainer>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContainer>
      </Header>
      <FlatList
        contentContainerStyle={{ padding: 24 }}
        showsVerticalScrollIndicator={false}
        data={carData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Car data={item} />}
      />
    </Container>
  );
}
