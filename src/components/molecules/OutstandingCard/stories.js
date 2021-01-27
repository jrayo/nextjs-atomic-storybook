import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import OutstandingCard from '.'

export default {
  title: 'Molecules|Outstanding Card',
  component: OutstandingCard,
  decorators: [withA11y]
}

const title = 'catering'
const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quasi ex! Et, eligendi necessitatibus'
const actionButton = {
  text: 'explore',
  href: '/'
}
const image = {
  imageURL: 'images/bg-about.png',
  alt: 'Mexican Food'
}

export const CateringCard = () => {
  return (
    <OutstandingCard
      image={image}
      title={title}
      description={description}
      actionButton={actionButton}
    />
  )
}
