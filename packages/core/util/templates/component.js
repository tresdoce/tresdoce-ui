module.exports = (componentName) => ({
  filename: componentName,
  extension: `.tsx`,
  content: `import * as React from 'react';
import filterProps from '../../utils/filter-props';
import clsx from 'clsx';
import { withTheme } from '../Theme';
import { ${componentName}Props } from './${componentName}.types';
import { ${componentName}Style } from './styles';

const ${componentName}: React.FC<${componentName}Props> = ({ 
  className,
  foo,
  ...rest
}) => {
  const filteredProps = filterProps(rest);
  const classes = clsx({
    'default-class':false,
    [className]: !!className
  });
  
  return(
    <${componentName}Style className={classes} {...filteredProps}>
      {foo}
    </${componentName}Style>
    );
};

${componentName}.displayName = '@tresdoce-ui/core/${componentName}';

export default withTheme(${componentName});`,
});
