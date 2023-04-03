import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    secondary: {
      main: 'rgb(80, 72, 229)',
      dark: '#10B981',
    },
    grey: {
      A700: 'rgb(101, 116, 139)',
      A400: 'rgb(242, 250, 248)',
    },
  },
})

export default theme
