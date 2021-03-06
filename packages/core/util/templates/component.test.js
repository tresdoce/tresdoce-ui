module.exports = (componentName) => ({
  filename: componentName,
  extension: `.test.tsx`,
  content: `import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '../../../../brand/src';
import Layout from '../Layout';

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Component - ${componentName}", () => {
  let props: ${componentName}Props;
  
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><${componentName} {...props} /></Layout>);
  const updateComponent = (renderer, props) => renderer(<Layout theme={createTheme()} cdnBasepath={''}><${componentName} {...props} /></Layout>);
  
  it('Should has a correct displayName', () =>{
    expect(${componentName}.displayName).toEqual('@tresdoce-ui/core/${componentName}');
  });
  
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    props['data-testId'] = "id-test-${componentName}-component";
    const { getByTestId, rerender } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component).toHaveTextContent(props.foo);
    
    props.foo = 'harvey was here 2';
    updateComponent(rerender, props);
    expect(component).toHaveTextContent(props.foo);
  });
});`
});
