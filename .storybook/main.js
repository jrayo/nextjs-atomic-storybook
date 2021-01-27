module.exports = {
  stories: ['../src/components/**/**/stories.[tj]s'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register'
  ]
}
