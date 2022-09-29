import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface BackButtonProps {
  color: string;
}

export const Container = styled(BorderlessButton)``;

export const Icon = styled(Feather)<BackButtonProps>`
  color: ${({ color, theme }) =>
    color === 'light' ? theme.colors.background_secondary : theme.colors.text};
`;
