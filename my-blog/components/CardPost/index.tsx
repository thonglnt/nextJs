import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { Document } from '@contentful/rich-text-types'

// Utils
import { options } from '@utils/configOptionsContentful'

export interface ICardPost {
  image: string
  headerContent: string
  shortContent: Document
  view: string
  href: string
}

const CardPost = ({
  image,
  headerContent,
  shortContent,
  view,
  href,
}: ICardPost) => {
  const theme = useTheme()

  return (
    <Box component="article" marginBottom="50px" width="100%">
      <Box component="figure" marginBottom="15px" overflow="hidden">
        <Image
          src={image}
          width="1200"
          height="500"
          alt={image}
          quality={40}
          loading="eager"
          sizes="(min-width: 600px) 90vw, 60vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <Box
          padding="40px 40px 20px"
          bgcolor={theme.palette.grey[100]}
          marginTop="-76px"
          zIndex={1}
          width="85%"
          position="relative"
        >
          <Typography
            variant="h2"
            lineHeight="1.5"
            fontWeight={600}
            marginBottom="5px"
            sx={{
              fontSize: {
                xs: '20px',
                md: '25px',
              },
            }}
          >
            <Link href={`/${href}`}>{headerContent}</Link>
          </Typography>
          <Box>
            <Box lineHeight="25px" letterSpacing="0.3px" marginBottom="10px">
              {documentToReactComponents(
                shortContent,
                options as unknown as undefined,
              )}
            </Box>
            <Typography marginBottom="10px" fontWeight={600} fontSize="14px">
              {`${view} views`}{' '}
            </Typography>
            <Typography
              fontWeight={600}
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                },
              }}
            >
              <Link href={`/${href}`}>CONTINUE READING...</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(CardPost)
