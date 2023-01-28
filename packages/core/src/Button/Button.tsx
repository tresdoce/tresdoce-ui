import React from 'react';
import filterProps from '../utils/filter-props';

import { ButtonProps } from './Button.types';
import { ButtonStyle } from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const filteredProps = filterProps(rest);

  return <ButtonStyle {...filteredProps}>{children}</ButtonStyle>;
};

Button.displayName = 'Button';

export default Button;
