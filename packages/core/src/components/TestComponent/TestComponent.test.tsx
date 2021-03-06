import * as React from 'react';
import { render } from '@testing-library/react';

import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import TestComponent from './TestComponent';
import { TestComponentProps } from './TestComponent.types';


describe('Component - TestComponent', () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      mode: 'primary',
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme({})} cdnBasepath={''}><TestComponent {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(TestComponent.displayName).toEqual('@tresdoce-ui/core/TestComponent');
  });

  it('should have primary className with default props', () => {
    const { getByTestId,  } = renderComponent();
    const testComponent = getByTestId('test-component');
    expect(testComponent).toHaveClass('test-component-primary');
  });

  it('should have secondary className with theme set as secondary', () => {
    props.mode = 'secondary';
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('test-component');
    expect(testComponent).toHaveClass('test-component-secondary');
  });
});
