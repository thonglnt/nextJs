'use client'

import { Box, Container, Typography, useTheme } from '@mui/material'

// Constants
import { DEFAULT_HEADER_URL } from '@constants/router'
import { LOGO_TITLE, NAVIGATE_ITEM } from '@constants/__mock__/mockData'

// Components
import Logo from '@components/Logo'
import Navigation from '@components/Navigation'
import Breadcrumbs, { LinkItem } from '@components/Breadcrumbs'

export interface IHeader {
  pageTitle: string
  breadCrumbs: LinkItem[]
}

const Header = ({ pageTitle = 'Title', breadCrumbs = [] }: IHeader) => {
  const theme = useTheme()

  return (
    <Box component="header" marginBottom="50px">
      <Box paddingTop="20px" bgcolor={theme.palette.grey[100]}>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Logo
            link={DEFAULT_HEADER_URL.HOME.URL}
            marginBottom="20px"
            letterSpacing="2px"
          >
            {LOGO_TITLE}
          </Logo>
          <Navigation navItems={NAVIGATE_ITEM} />
        </Container>
      </Box>
      {breadCrumbs.length > 0 && (
        <Box
          paddingTop="20px"
          bgcolor={theme.palette.grey[100]}
          sx={{
            paddingTop: {
              xs: '50px',
              md: '100px',
            },
          }}
        >
          <Container maxWidth="lg">
            <Breadcrumbs links={breadCrumbs} />
            <Typography
              data-testid="page-title"
              variant="h2"
              letterSpacing="2px"
              fontWeight={800}
              color={theme.palette.grey[400]}
              textTransform="uppercase"
              sx={{
                fontSize: {
                  xs: '25px',
                  md: '48px',
                },
                marginTop: {
                  xs: '20px',
                  md: '40px',
                },
              }}
            >
              {pageTitle}
            </Typography>
          </Container>
        </Box>
      )}
    </Box>
  )
}

export default Header
