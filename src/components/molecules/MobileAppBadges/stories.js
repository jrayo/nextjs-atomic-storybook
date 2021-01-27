import React from 'react'
import { withKnobs, array } from '@storybook/addon-knobs'
import MobileAppBadges from '.'
import data from './data.json'

export default {
  title: 'Molecules|MobileAppBadges',
  component: MobileAppBadges,
  decorators: [withKnobs]
}

const items = {
  label: 'Badges',
  default: data.items,
  group: 'content'
}

export const Desktop = () => (
  <MobileAppBadges items={array(items.label, items.default, items.group)} />
)

export const InsideDiv = () => (
  <div style={{ width: '1000px' }}>
    <MobileAppBadges items={array(items.label, items.default, items.group)} />
  </div>
)

export const Vertical = () => (
  <div style={{ width: '1000px' }}>
    <MobileAppBadges
      items={array(items.label, items.default, items.group)}
      direction="vertical"
    />
  </div>
)
