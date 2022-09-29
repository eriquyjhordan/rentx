import { StatusBar } from 'expo-status-bar';
import React from 'react';

import aceleration from '../../assets/Aceleration.svg';
import gasolineSvg from '../../assets/Gasoline.svg';
import gearBoxSvg from '../../assets/Gearbox.svg';
import peopleSvg from '../../assets/People.svg';
import speedSvg from '../../assets/Speed.svg';
import strenghtSvg from '../../assets/Strenght.svg';
import { Acessory } from '../../components/Acessory';
import { ActionButton } from '../../components/ActionButton';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Header>
        <BackButton onPress={() => { }} color="dark" />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHHU4KyunUgjAHXQC8t48rsk04UaZPsks6g&usqp=CAU',
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Acessory name="380 Km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={aceleration} />
          <Acessory name="800 HP" icon={strenghtSvg} />
          <Acessory name="Gasoline" icon={gasolineSvg} />
          <Acessory name="Auto" icon={gearBoxSvg} />
          <Acessory name="2 Pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real
          Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <ActionButton title="Escolher período do aluguel" active onPress={() => { }} />
      </Footer>
    </Container>
  );
}
