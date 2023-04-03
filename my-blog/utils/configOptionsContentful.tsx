import { BLOCKS } from '@contentful/rich-text-types'
import { Typography } from '@mui/material'

const Text = ({ children }: { children: string }) => (
  <Typography
    fontFamily={`'Josefin Sans' ,san-serif`}
    fontSize={{ xs: '15px', md: '20px' }}
  >
    {children}
  </Typography>
)

const Heading2 = ({ children }: { children: string }) => (
  <Typography
    variant="h2"
    fontSize={{ xs: '18px', md: '30px' }}
    margin={{ xs: '10px 0px', md: '20px 0px' }}
    fontFamily={`'Josefin Sans' ,san-serif`}
  >
    {children}
  </Typography>
)

export const options = {
  renderNode: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [BLOCKS.PARAGRAPH]: (node: unknown, children: string) => (
      <Text>{children}</Text>
    ),
    [BLOCKS.HEADING_2]: (node: unknown, children: string) => (
      <Heading2>{children}</Heading2>
    ),
  },
}
