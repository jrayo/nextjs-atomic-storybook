import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import NavigationItem from '.'

export const NavigationTitle = () => (
  <ul>
    <NavigationItem
      color={(props) => props.theme.colors.grayishBlueLightest}
      href="/">
      Order
    </NavigationItem>
  </ul>
)

export const ColoredBackground = () => (
  <ul>
    <NavigationItem
      color={(props) => props.theme.colors.grayishBlue}
      href="/api">
      Order
    </NavigationItem>
  </ul>
)

export const SmallTitle = () => (
  <ul>
    <NavigationItem small href="#">
      PRIVACY POLICY
    </NavigationItem>
  </ul>
)

export default {
  title: 'Atoms|Navigation Item',
  component: NavigationItem,
  decorators: [withA11y]
}
