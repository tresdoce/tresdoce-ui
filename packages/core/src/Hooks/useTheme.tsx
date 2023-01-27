import { useTheme as useThemeStyled } from 'styled-components';
import { ITheme } from '../common-theme/interfaces';

export const useTheme = (): ITheme => useThemeStyled() as ITheme;
