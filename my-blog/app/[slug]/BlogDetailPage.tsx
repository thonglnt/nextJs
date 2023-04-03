'use client'

import { useCallback, useMemo } from 'react'
import { Box, Container } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRouter } from 'next/navigation'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

// Constants
import { MOCK_CATEGORY_ITEMS } from '@constants/__mock__/mockData'

// Components
import Widget from '@components/Widget'
import Button from '@components/Button'
import Header from '@components/Header'

// Types
import { IPostDetail } from '@self-types/PostDetail.types'

// Utils
import { options } from '@utils/configOptionsContentful'

const PostDetail = ({
  recipe,
  previous,
  next,
}: {
  recipe: string
  previous: string
  next: string
}) => {
  const router = useRouter()

  const post = recipe ? JSON.parse(recipe) : {}

  const previousPost = useMemo(
    () => (previous ? JSON.parse(previous) : {}),
    [previous],
  )

  const nextPost = useMemo(() => (next ? JSON.parse(next) : {}), [next])

  const handleGetOlderPosts = useCallback(() => {
    router.push(`/${previousPost[0].slug}`)
  }, [previousPost, router])

  const handleGetNewerPosts = useCallback(() => {
    router.push(`/${nextPost[0].slug}`)
  }, [nextPost, router])

  return (
    <>
      {post.map((item: IPostDetail) => {
        return (
          <Box key={item.slug}>
            <Header
              pageTitle={item.title}
              breadCrumbs={[{ link: item.title, href: item.slug }]}
            />
            <Box component="main">
              <Container
                maxWidth="lg"
                sx={{
                  display: 'flex',
                  flexDirection: {
                    xs: 'column',
                    md: 'row',
                  },
                }}
              >
                <Box maxWidth="100%" marginRight="20px">
                  {/* Contents */}

                  <Image
                    src={item.heroImage[0].url}
                    width="1200"
                    height="500"
                    alt={item.slug}
                    quality={40}
                    loading="eager"
                    sizes="(min-width: 600px) 90vw, 60vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <Box
                    lineHeight="35px"
                    letterSpacing="0.7px"
                    marginTop={3}
                    marginBottom={5}
                  >
                    {documentToReactComponents(
                      item.content,
                      options as unknown as undefined,
                    )}
                  </Box>
                  {/* Button next/previous post */}
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Button
                      variant="contained"
                      startIcon={<ArrowBackIcon />}
                      sx={{
                        width: '45%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '15px',
                      }}
                      onClick={handleGetOlderPosts}
                    >
                      {previousPost[0]?.title
                        ? previousPost[0].title
                        : 'Button'}
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        width: '45%',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                      onClick={handleGetNewerPosts}
                    >
                      {nextPost[0]?.title ? nextPost[0].title : 'Button'}
                    </Button>
                  </Box>
                </Box>
                <Box
                  minWidth="25%"
                  sx={{
                    marginTop: {
                      xs: '50px',
                      md: '0px',
                    },
                  }}
                >
                  {/* Category */}
                  <Widget widgetsItem={MOCK_CATEGORY_ITEMS} title="Category" />
                </Box>
              </Container>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
export default PostDetail
