import React from 'react'
import { withKnobs, array, select } from '@storybook/addon-knobs'

import Navigation from '.'
import data from './data.json'

const direction = {
  label: 'Direction',
  options: {
    horizontal: 'horizontal',
    vertical: 'vertical'
  },
  default: 'horizontal',
  group: 'variation'
}

const items = {
  label: 'Items',
  default: data.topList,
  group: 'content'
}

const itemsSmall = {
  label: 'Items',
  default: data.infoList,
  group: 'content'
}

export const horizontalNavigation = () => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      direction.default,
      direction.group
    )}
    items={array(items.label, items.default, items.group)}
    color={({ theme }) => theme.colors.grayishBlueLightest}
  />
)
export const smallHorizontalNavigation = () => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      direction.default,
      direction.group
    )}
    items={array(itemsSmall.label, itemsSmall.default, itemsSmall.group)}
    color={({ theme }) => theme.colors.grayishBlueLightest}
    small
  />
)

export const verticalNavigation = () => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      'vertical',
      direction.group
    )}
    items={array(items.label, items.default, items.group)}
  />
)

export const smallVerticalNavigation = () => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      'vertical',
      direction.group
    )}
    items={array(itemsSmall.label, itemsSmall.default, itemsSmall.group)}
    small
  />
)

export default {
  component: Navigation,
  decorators: [withKnobs],
  title: 'Molecules|Navigation'
}
