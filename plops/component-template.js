module.exports = {
  description: 'Create a new Component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Please supply a valid component name',
    },
  ],
  actions: () => {
    let actions = [];
    actions = actions.concat(
      {
        type: 'modify',
        path: 'packages/core/src/index.tsx',
        template:
          "export { default as {{pascalCase componentName}} } from './{{pascalCase componentName}}';\n$1",
        pattern: /(\/\/-- PLOP-COMPONENTS-EXPORTS --)/g,
      },
      {
        type: 'add',
        path: 'packages/core/src/{{pascalCase componentName}}/index.tsx',
        templateFile: 'plops-templates/component-template/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/core/src/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
        templateFile: 'plops-templates/component-template/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/core/src/{{pascalCase componentName}}/{{pascalCase componentName}}.types.tsx',
        templateFile: 'plops-templates/component-template/component.types.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/core/src/{{pascalCase componentName}}/styles.tsx',
        templateFile: 'plops-templates/component-template/component.styles.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/core/src/{{pascalCase componentName}}/stories/{{pascalCase componentName}}.stories.tsx',
        templateFile: 'plops-templates/component-template/stories/component.stories.tsx.hbs',
      },
    );
    return actions;
  },
};
