import { letterSpacing, lineHeight, fontSize, fontWeight } from '../../common-theme';
import { IBody, ICaption, ITextStyles, IOverline, ITitle } from '../../common-theme/interfaces';

export const fontSheetLink =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap';

const fontFamily = {
  primary: "'Poppins', sans-serif",
};

const title: ITitle = {
  xxl: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['5xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight['2xlarge'],
      fontWeight: fontWeight.highContrast,
    },
    lowContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['5xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight['2xlarge'],
      fontWeight: fontWeight.lowContrast,
    },
  },
  xl: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['4xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight['2xlarge'],
      fontWeight: fontWeight.highContrast,
    },
    lowContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['4xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight['2xlarge'],
      fontWeight: fontWeight.lowContrast,
    },
  },
  l: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['3xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.xlarge,
      fontWeight: fontWeight.highContrast,
    },
    lowContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['3xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.xlarge,
      fontWeight: fontWeight.lowContrast,
    },
  },
  m: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['2xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.large,
      fontWeight: fontWeight.highContrast,
    },
    lowContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['2xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.large,
      fontWeight: fontWeight.lowContrast,
    },
  },
  s: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.medium,
      fontWeight: fontWeight.highContrast,
    },
    midContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['xlarge'],
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.medium,
      fontWeight: fontWeight.midContrast,
    },
  },
  xs: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize.large,
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.medium,
      fontWeight: fontWeight.highContrast,
    },
    midContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize.large,
      letterSpacing: letterSpacing.small,
      lineHeight: lineHeight.medium,
      fontWeight: fontWeight.midContrast,
    },
  },
};

const body: IBody = {
  m: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['large'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['large'],
      fontWeight: fontWeight.highContrast,
    },
    midContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['large'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['large'],
      fontWeight: fontWeight.midContrast,
    },
    'midContrast-underline': {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['large'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['large'],
      fontWeight: fontWeight.midContrast,
      underline: true,
    },
  },
  s: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['medium'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['large'],
      fontWeight: fontWeight.highContrast,
    },
    midContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['medium'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['large'],
      fontWeight: fontWeight.midContrast,
    },
    'midContrast-underline': {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['medium'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['large'],
      fontWeight: fontWeight.midContrast,
      underline: true,
    },
  },
};

const caption: ICaption = {
  default: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['small'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['xsmall'],
      fontWeight: fontWeight.highContrast,
    },
    midContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['small'],
      letterSpacing: letterSpacing.medium,
      lineHeight: lineHeight['xsmall'],
      fontWeight: fontWeight.midContrast,
    },
  },
};

const overline: IOverline = {
  default: {
    highContrast: {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['xsmall'],
      letterSpacing: letterSpacing.xlarge,
      lineHeight: lineHeight['xsmall'],
      fontWeight: fontWeight.highContrast,
    },
    'highContrast-uppercase': {
      fontFamily: fontFamily.primary,
      fontSize: fontSize['xsmall'],
      letterSpacing: letterSpacing.xlarge,
      lineHeight: lineHeight['xsmall'],
      fontWeight: fontWeight.highContrast,
      uppercase: true,
    },
  },
};

export const textStyles: ITextStyles = {
  title,
  body,
  caption,
  overline,
  fontSheetLink,
};
