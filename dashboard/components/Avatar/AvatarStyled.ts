import { Badge, styled } from '@mui/material'

interface BadgeStyledProps {
  status: 'on' | 'off'
}

export const StyledBadge = styled(Badge)<BadgeStyledProps>`
  ${({ status, theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: `${
        status === 'on' ? '#44b700' : `${theme.palette.grey[400]}`
      }`,
      color: `${status === 'on' ? '#44b700' : `${theme.palette.grey[400]}`}`,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  })}
`
