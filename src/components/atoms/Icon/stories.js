import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Icon from '.'

const label = 'Icons'
const options = {
  User: 'user',
  Location: 'location',
  Twitter: 'twitter',
  ShoppingCart: 'shoppingCart',
  Pinterest: 'pinterest',
  Instagram: 'instagram',
  Facebook: 'facebook',
  Close: 'close',
  Arrow: 'arrow'
}
const defaultValue = 'shoppingCart'
const groupId = 'Group01'

export const ShoppingCart = () => (
  <Icon
    name={select(label, options, defaultValue, groupId)}
    color={(props) => props.theme.colors.grayishBlueLightest}
  />
)

export default {
  title: 'Atoms|Icon',
  component: Icon,
  decorators: [withKnobs]
}
