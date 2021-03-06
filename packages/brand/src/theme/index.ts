import createPalette, { Palette, PaletteInput } from './create-palette';
import createTypography, { Typography, TypographyInput } from './create-typography';
import themeImages, { Image } from './images';
import createSizing, { Sizing, SizingInput } from './sizing';
import createRadiuses, { Radiuses, RadiusesInput } from './radiuses';
import createSpacing, { Spacing, SpacingInput } from './spacing';
import createGrid, { Grid, GridInput } from './grid';
import zIndex, { ZIndex } from './z-index';

export interface Theme {
  palette: Palette,
  typography: Typography,
  images: Image,
  sizing: Sizing,
  spacing: Spacing,
  grid: Grid,
  radiuses: Radiuses,
  zIndex: ZIndex
}

export interface ThemeInput {
  palette?: PaletteInput,
  typography?: TypographyInput,
  radiuses?: RadiusesInput,
  sizing?: SizingInput,
  spacing?: SpacingInput,
  grid?: GridInput,
}

const createTheme = (options?: ThemeInput): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    radiuses: radiusesInput = {},
    sizing: sizingInput = {},
    spacing: spacingInput = {},
    grid: gridInput = {},
  } = options || {};

  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);
  const images = themeImages();
  const radiuses = createRadiuses(radiusesInput);
  const sizing = createSizing(sizingInput);
  const spacing = createSpacing(spacingInput);
  const grid = createGrid(gridInput);

  return {
    palette,
    typography,
    images,
    sizing,
    spacing,
    grid,
    radiuses,
    zIndex,
  };
};

export default createTheme;
