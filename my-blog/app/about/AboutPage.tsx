'use client'

import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Typography, Container } from '@mui/material'

// Components
import Header from '@components/Header'

// Types
import { IContentAbout } from '@self-types/ContentAbout.types'

// Utils
import { options } from '@utils/configOptionsContentful'

const AboutPage = ({ content }: { content: string }) => {
  const data = content ? JSON.parse(content) : {}

  const renderContentHomePage = () =>
    data.map((item: IContentAbout) => (
      <Box component="main" key={item.name}>
        <Box component="section">
          <Typography
            variant="h5"
            marginBottom="20px"
            fontSize={{
              xs: '16px',
              md: '20px',
            }}
          >
            {item.description}
          </Typography>

          {/* Information Author */}
          <Typography
            variant="h2"
            textTransform="uppercase"
            fontSize={24}
            fontWeight={700}
            marginBottom="40px"
          >
            1. TO {item.name}
          </Typography>
          <Image
            src={item.avatar[0].url}
            alt="avatar"
            width={200}
            height={200}
            loading="eager"
          />
          <Box lineHeight="35px" letterSpacing="0.7px" marginTop={3}>
            {documentToReactComponents(
              item.introduceYourself,
              options as unknown as undefined,
            )}
          </Box>

          {/* Information Blog */}
          <Typography
            variant="h2"
            textTransform="uppercase"
            fontSize={24}
            fontWeight={700}
            marginBottom="40px"
            marginTop={5}
          >
            2. TO {item.blog}
          </Typography>

          <Box lineHeight="35px" letterSpacing="0.7px" marginTop={3}>
            {documentToReactComponents(
              item.introduceBlog,
              options as unknown as undefined,
            )}
          </Box>
        </Box>
      </Box>
    ))

  return (
    <>
      <Header
        pageTitle="About"
        breadCrumbs={[{ link: 'about', href: 'about' }]}
      />
      <Box component="main">
        <Container maxWidth="lg">{renderContentHomePage()}</Container>
      </Box>
    </>
  )
}

export default AboutPage
