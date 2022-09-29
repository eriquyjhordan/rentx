import React from 'react';
import { BorderlessButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';

import { Container, Icon } from './styles';

interface Props extends BorderlessButtonProps {
  color: 'light' | 'dark';
  onPress: () => void;
}

export function BackButton({ color, onPress, ...rest }: Props) {
  return (
    <GestureHandlerRootView>
      <Container {...rest} onPress={onPress}>
        <Icon name="chevron-left" size={24} color={color} />
      </Container>
    </GestureHandlerRootView>
  );
}
