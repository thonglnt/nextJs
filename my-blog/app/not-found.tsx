'use client'

import { Box } from '@mui/material'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <h1>Page Not Found</h1>
      <p className="zoom-area">
        <b>Oops!</b> Something is wrong.
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link href="/" className="more-link">
          Go HomePage
        </Link>
      </div>
    </Box>
  )
}
