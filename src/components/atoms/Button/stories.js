import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from '.'

const buttonClicked = (e) => {
  e.preventDefault()
  alert('hello world') // eslint-disable-line
}

export default {
  title: 'Atoms|Button',
  component: Button,
  decorators: [withKnobs]
}

export const Primary = () => (
  <Button>{text('Basic text', 'PRIMARY BUTTON')}</Button>
)

export const PrimaryRed = () => <Button red>PRIMARY RED</Button>

export const PrimaryLight = () => <Button primaryLight>PRIMARY LIGHT</Button>

export const Secondary = () => <Button secondary>SECONDARY</Button>

export const SecondaryRed = () => (
  <Button secondary red>
    SECONDARY
  </Button>
)

export const SecundaryWithLink = () => (
  <Button
    secondary
    href="#"
    // eslint-disable-next-line no-undef
    onClick={() => window.open('/order', '_blank')}
    role="link">
    ORDER NOW
  </Button>
)

export const Tertiary = () => <Button tertiary>TERTIARY</Button>

export const Disabled = () => <Button disabled>DISABLED</Button>

export const WithIcon = () => (
  <Button tertiary icon="user">
    SIGN IN & EARN REWARDS
  </Button>
)

export const WithAlert = () => (
  <Button secondary href="/route" onClick={buttonClicked}>
    LINKED
  </Button>
)

export const IconButton = () => <Button tertiary icon="close" />
