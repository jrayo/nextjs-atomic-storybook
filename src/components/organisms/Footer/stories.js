import React from 'react'
import { withKnobs, array } from '@storybook/addon-knobs'
import Footer from '.'
import itemsList from '../../molecules/NavigationList/data.json'

const itemsNavigation = {
  label: 'Navigation',
  default: itemsList.bottomList,
  group: 'content'
}

const itemsInfo = {
  label: 'Info',
  default: itemsList.infoList,
  group: 'content'
}

const itemsBadges = {
  label: 'Badges',
  default: itemsList.items,
  group: 'content'
}

const itemsSocial = {
  label: 'Social',
  default: itemsList.itemsSocial,
  group: 'content'
}

export const FooterDesktop = () => (
  <Footer
    bottomList={array(
      itemsNavigation.label,
      itemsNavigation.default,
      itemsNavigation.group
    )}
    infoList={array(itemsInfo.label, itemsInfo.default, itemsInfo.group)}
    items={array(itemsBadges.label, itemsBadges.default, itemsBadges.group)}
    itemsSocial={array(
      itemsSocial.label,
      itemsSocial.default,
      itemsSocial.group
    )}
  />
)

export default {
  component: Footer,
  decorators: [withKnobs],
  title: 'Organisms|Footer'
}
