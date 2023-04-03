import theme from '@self-types/Themes.types'
import { ThemeProvider } from '@mui/styles'

export function MUIProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
