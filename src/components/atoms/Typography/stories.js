import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

import Typography from '.'

export default {
  title: 'Atoms|Typography',
  component: Typography,
  decorators: [withA11y]
}

export function Display() {
  return (
    <Typography tag="p" display color="green">
      Variant
    </Typography>
  )
}

export function H1() {
  return (
    <Typography tag="h1" h1 color="#131B30">
      Variant
    </Typography>
  )
}

export function H2() {
  return (
    <Typography tag="h2" h2>
      Variant
    </Typography>
  )
}

export function H3() {
  return (
    <Typography tag="h3" h3>
      Variant
    </Typography>
  )
}

export function Subheading1() {
  return (
    <Typography tag="h3" subheading1>
      Variant
    </Typography>
  )
}

export function Subheading2() {
  return (
    <Typography tag="p" subheading2>
      Variant
    </Typography>
  )
}

export function Body() {
  return (
    <Typography tag="p" body>
      Variant
    </Typography>
  )
}

export function CustomSize() {
  return (
    <Typography tag="p" h1 size={{ sm: '1rem', md: '1.5rem', lg: '3rem' }}>
      Variant
    </Typography>
  )
}

export function CustomLineHeight() {
  return (
    <Typography
      tag="p"
      display
      lineHeight={{ sm: '2rem', md: '6rem', lg: '8rem' }}>
      Variant
    </Typography>
  )
}
