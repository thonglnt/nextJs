'use client'

import { memo } from 'react'
import { ButtonProps } from '@mui/material'

// Styles
import { ButtonStyled } from './ButtonStyled'

export interface IButtonProps extends ButtonProps {
  children: React.ReactNode | string
}

const Button = ({ children = 'Button', onClick, ...props }: IButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      {...props}
      sx={{
        padding: {
          xs: '6px 16px',
          sm: '8px 20px',
          md: '11px 24px',
        },
        fontSize: '14px',
      }}
    >
      {children}
    </ButtonStyled>
  )
}

export default memo(Button)
