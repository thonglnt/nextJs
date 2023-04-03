'use client'

import { Box, Input, SvgIcon, Typography, useTheme } from '@mui/material'
import { ChangeEvent, memo, useCallback } from 'react'
import CloseIcon from '@mui/icons-material/Close'

// Styles
import { BackDropStyled } from './SearchStyled'

export interface ISearch {
  isOpen: boolean
  onClose: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
const Search = ({ isOpen, onClose, onChange, onKeyDown }: ISearch) => {
  const theme = useTheme()

  const preventCloseModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(),
    [],
  )

  if (!isOpen) {
    return null
  }

  return (
    <BackDropStyled
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="backdrop"
    >
      <Box
        data-testid="content"
        onClick={preventCloseModal}
        bgcolor={theme.palette.common.black}
        padding="15px"
        position="relative"
        sx={{
          width: {
            xs: '90%',
            md: '50%',
          },
        }}
      >
        <SvgIcon
          data-testid="close-icon"
          sx={{
            color: theme.palette.common.white,
            position: 'absolute',
            right: 0,
            top: 0,
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </SvgIcon>
        <Input
          type="text"
          placeholder="Search ..."
          fullWidth
          sx={{
            color: theme.palette.common.white,
            fontSize: '30px',
            border: 'none',
            marginTop: '10px',
          }}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Typography
          fontSize="13px"
          sx={{
            color: theme.palette.common.white,
            fontWeight: 600,
            marginTop: '5px',
          }}
        >
          Type to search
        </Typography>
      </Box>
    </BackDropStyled>
  )
}

export default memo(Search)
