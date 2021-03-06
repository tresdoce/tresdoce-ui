const path = require('path');

module.exports = {
  stories: [
    '../Docs/**/*.stories.@(mdx)',
    '../packages/core/src/**/*.stories.@(tsx|ts|jsx|js)',
  ],
  addons: [
    '@storybook/addon-docs/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport:true,
        toolbars:true
      }
    },
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    //'@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    //'@storybook/addon-toolbars',
    '@storybook/addons',
    /*{
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../packages/core/src/')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },*/
    '@storybook/react'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      esModuleInterop: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
};
