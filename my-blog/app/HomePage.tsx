'use client'

import { Box, Container, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Layouts
import Header from '@components/Header'

// Utils
import { options } from '@utils/configOptionsContentful'

// Types
import { IContentHome } from '@self-types/ContentHome.types'

const HomePage = ({ content }: { content: string }) => {
  const data = content ? JSON.parse(content) : {}

  const theme = useTheme()

  const renderContentHomePage = () => {
    return data.map((item: IContentHome) => (
      <Box component="main" key={item.author}>
        <Box component="section" textAlign="center">
          <Typography
            variant="h2"
            marginBottom="10px"
            fontSize="28px"
            lineHeight="35px"
          >
            Code your life in an elegant way
          </Typography>

          <Typography
            variant="h3"
            fontSize="20px"
            lineHeight="28px"
            marginBottom="20px"
          >
            {`by ${item.author}`}
          </Typography>
          <Image
            src={`${item.image[0].url}`}
            alt="avatar"
            width={200}
            height={200}
            style={{
              borderRadius: '103% 103% 103% 103%',
              marginBottom: '70px',
            }}
            loading="eager"
          />
        </Box>
        <Box component="section" bgcolor={theme.palette.primary.main}>
          <Container maxWidth="md">
            <Box padding="10px">
              <Typography
                textAlign="center"
                fontWeight={600}
                marginBottom="30px"
              >
                Xin chào!
              </Typography>
              <Box lineHeight="35px" letterSpacing="0.7px">
                {documentToReactComponents(
                  item.foreword,
                  options as unknown as undefined,
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    ))
  }

  return (
    <>
      <Header pageTitle="" breadCrumbs={[]} />
      <Box component="main" minHeight="70vh">
        <Container maxWidth="lg">{renderContentHomePage()}</Container>
      </Box>
    </>
  )
}

export default HomePage
