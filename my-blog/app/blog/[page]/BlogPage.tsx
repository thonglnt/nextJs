'use client'

import { Box, Container } from '@mui/material'
import { memo } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// Components
import Header from '@components/Header'

// Components
import CardPost from '@components/CardPost'
import Widget from '@components/Widget'
import Button from '@components/Button'

// Constants
import { MOCK_CATEGORY_ITEMS } from '@constants/__mock__/mockData'

// Types
import { IListPost } from '@self-types/ListPost.types'
import Link from 'next/link'

export interface CategoryDetailProps {
  posts: {
    fields: IListPost[]
  }[]
}

const PageBlog = ({ blogList, page }: { blogList: string; page: number }) => {
  const posts = blogList ? JSON.parse(blogList) : {}

  const renderContentBlog = () => {
    return posts.map((blog: IListPost) => (
      <CardPost
        key={blog.slug}
        image={`${blog.heroImage[0].url}`}
        headerContent={blog.title}
        shortContent={blog.description}
        view={blog.view}
        href={blog.slug}
      />
    ))
  }

  return (
    <>
      <Header pageTitle="" breadCrumbs={[{ link: 'blog', href: 'blog' }]} />
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
            {renderContentBlog()}
            <Box display="flex" width="100%" justifyContent="space-between">
              <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                sx={{
                  width: '45%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px',
                }}
              >
                <Link href={`/blog/${page + 1}`} prefetch={false}>
                  Older posts
                </Link>
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  width: '45%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Link href={`/blog/${page - 1}`} prefetch={false}>
                  Newer posts
                </Link>
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
            {/* Recent Post */}
            <Widget
              widgetsItem={posts.map((blog: IListPost) => {
                return { name: blog.title, slug: blog.slug }
              })}
              title="Recent Post"
            />

            {/* Category */}
            <Widget widgetsItem={MOCK_CATEGORY_ITEMS} title="Category" />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default memo(PageBlog)
