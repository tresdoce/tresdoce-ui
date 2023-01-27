export type Font = {
  fontFamily: string;
  fontSize: string;
  letterSpacing: string;
  fontWeight: string;
  lineHeight: string;
  underline?: boolean;
  uppercase?: boolean;
};

interface varaintFont {
  [X: string]: Font;
}

export interface ITitle {
  xxl: varaintFont;
  xl: varaintFont;
  l: varaintFont;
  m: varaintFont;
  s: varaintFont;
  xs: varaintFont;
}

export interface IBody {
  m: varaintFont;
  s: varaintFont;
}
export interface ICaption {
  default: varaintFont;
}

export interface IOverline {
  default: varaintFont;
}

export interface ITextStyles {
  title: ITitle;
  body: IBody;
  caption: ICaption;
  overline: IOverline;
  fontSheetLink: string;
}
