'use client'

import '../styles/reset.css'
import '../styles/globals.css'
import '../styles/404.css'

// Components
import { MUIProvider } from '@components/ThemeProvider'
import Footer from '@components/Footer'

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
        <meta property="og:title" content="My Blog" />
        <meta name="description" content="Code your life in an elegant way" />
        <meta
          property="og:url"
          content="https://my-blog-livid-iota.vercel.app/"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MUIProvider>
          {children}
          <Footer />
        </MUIProvider>
      </body>
    </html>
  )
}
