'use client'

import '../../styles/reset.css'
import '../../styles/globals.css'

import { Container, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

// Contexts
import { AuthProvider } from '@contexts/AuthProvider'

// Types
import theme from '@self-types/Themes.types'

// Components
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Box
              component="main"
              sx={{
                background: theme.palette.grey.A400,
              }}
            >
              <Container
                maxWidth="md"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                {children}
              </Container>
            </Box>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
