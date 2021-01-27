import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '../src/theme'

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

addDecorator(GlobalWrapper)
