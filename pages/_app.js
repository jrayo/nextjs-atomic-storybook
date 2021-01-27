import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/theme/globalStyles'
import Theme from '../src/theme/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
