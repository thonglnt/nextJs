'use client'

import { Box, Container, Typography, useTheme } from '@mui/material'
import { memo } from 'react'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box component="footer">
      <Box
        padding="75px 0 35px"
        sx={{
          clear: 'both',
        }}
      >
        <Container maxWidth="lg">
          <Box component="aside" margin="0 0 30px" textAlign="center">
            <Typography
              fontSize="13px"
              fontWeight={600}
              data-testid="contact-detail"
            >
              Code your life in an elegant way
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box bgcolor={theme.palette.common.black} textAlign="center">
        <Typography
          data-testid="copyright"
          color={theme.palette.grey[200]}
          padding="13px 0 11px"
          fontSize="12px"
        >
          © Copyright 2019-2021 by BeautyOnCode
        </Typography>
      </Box>
    </Box>
  )
}

export default memo(Footer)
