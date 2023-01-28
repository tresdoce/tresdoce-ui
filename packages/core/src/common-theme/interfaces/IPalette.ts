type Color = string;

export interface IPalette {
  text: {
    default: Color;
  };
  bg: {
    default: Color;
    hover?: Color;
    pressed?: Color;
    disabled?: Color;
  };
}
