import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: '#1D1C1A',
    },
    primary: {
      main: '#FFF7FF',
    },
  },
  typography: {
    fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
  },
})

export default theme
