import React from 'react'
import { withKnobs, array } from '@storybook/addon-knobs'
import itemsList from '../../molecules/NavigationList/data.json'
import Header from '.'

const items = {
  label: 'Navigation',
  default: itemsList.topList,
  group: 'content'
}

export const HeaderDesktop = () => (
  <Header navigationItems={array(items.label, items.default, items.group)} />
)

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'Organisms|Header',
  layout: 'fullscreen'
}
