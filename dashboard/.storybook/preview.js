// Import the global style enabling classes
import { ThemeProvider } from '@mui/material/styles'
import theme from '@self-types/Themes.types'

//FIXME: Global styles not work for storybook
import '../styles/reset.css'
import '../styles/globals.css'

import * as NextImage from 'next/image'
const OriginalNextImage = NextImage.default

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
