import { Button, styled } from '@mui/material'

// Components
import { IButtonProps } from '@components/Button'

export const ButtonStyled = styled(Button)<IButtonProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey[800]};
  font-weight: 700;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.grey[600]};
  }
`
