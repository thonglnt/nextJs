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
    <ButtonStyled onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  )
}

export default memo(Button)
