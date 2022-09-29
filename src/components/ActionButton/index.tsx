import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ActionButtonProps extends RectButtonProps {
  color?: string;
  title: string;
  active: boolean;
  backgroundColor?: string;
}

export function ActionButton({
  color,
  title,
  active,
  backgroundColor,
  ...rest
}: ActionButtonProps) {
  return (
    <GestureHandlerRootView>
      <Container background={backgroundColor} {...rest} color={color} active={active}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
}
