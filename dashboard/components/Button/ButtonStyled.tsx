import { Button, styled } from '@mui/material'

// Components
import { IButtonProps } from '@components/Button'

export const ButtonStyled = styled(Button)<IButtonProps>`
  &:disabled {
    cursor: no-drop;
  }
`
