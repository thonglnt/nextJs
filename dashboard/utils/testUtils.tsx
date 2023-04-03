import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'

// Themes
import theme from '@self-types/Themes.types'

export const customRender = (children: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}

export * from '@testing-library/react'
export { customRender as render }
