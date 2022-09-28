import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  export type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
