const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/**/*.stories.mdx',
    '../../../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport: true,
        toolbars: true,
      },
    },
    //'@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@react-theming/storybook-addon',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    if (configType === 'PRODUCTION') {
      config.base = './';
    }

    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@nerdearla-style-react/core',
            replacement: path.resolve(__dirname, '../../../packages/tresdoce-test-core/'),
          },
        ],
      },
    };
  },
};
