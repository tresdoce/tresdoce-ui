import React from 'react';
import filterProps from '../utils/filter-props';

import { ExampleProps } from './Example.types';
import { ExampleStyle } from './styles';

const Example: React.FC<ExampleProps> = ({ children, ...rest }) => {
  const filteredProps = filterProps(rest);

  return <ExampleStyle {...filteredProps}>{children}</ExampleStyle>;
};

Example.displayName = 'Example';

export default Example;
