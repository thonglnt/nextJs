import { memo } from 'react'
import { Box, Typography, TypographyProps, useTheme } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// Components
import Button from '@components/Button'

export interface ICardHeader extends TypographyProps {
  title: string
  desc?: string
  actions?: boolean
}

const CardHeader = ({ title, desc, actions = false }: ICardHeader) => {
  const theme = useTheme()

  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box>
        <Typography
          variant="h5"
          fontSize="18px"
          fontWeight={700}
          lineHeight="25px"
        >
          {title}
        </Typography>
        {desc && (
          <Typography
            fontSize="14px"
            lineHeight="21px"
            color={theme.palette.grey[500]}
          >
            {desc}
          </Typography>
        )}
      </Box>
      {actions && (
        <Button>
          <MoreVertIcon />
        </Button>
      )}
    </Box>
  )
}

export default memo(CardHeader)
