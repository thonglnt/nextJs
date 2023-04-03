'use client'

import '../../styles/reset.css'
import '../../styles/globals.css'

import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

// Contexts
import { AuthProvider } from '@contexts/AuthProvider'

// Types
import theme from '@self-types/Themes.types'

// Constants
import { MOCK_SIDEBAR } from '@constants/mockData'

// Components
import SideBar, { ISidebar } from '@components/SideBar'
import Header from '@components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard: Overview</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Box component="main" display="flex">
              <SideBar menuSidebar={MOCK_SIDEBAR as ISidebar[]} />
              <Box display="flex" flexDirection="column" width="100%">
                <Header />
                {children}
              </Box>
            </Box>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
