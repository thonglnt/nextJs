'use client'

import { memo, ReactNode } from 'react'
import {
  Alert,
  AlertProps,
  AlertTitle,
  Box,
  Collapse,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export interface IAlert extends AlertProps {
  children: ReactNode | string
  alertTitle?: string
  isOpen: boolean
  onClose?: () => void
}

const TransitionAlerts = ({
  children = 'Alerts',
  alertTitle,
  severity,
  isOpen = false,
  onClose,
}: IAlert) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={isOpen}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
              data-testid="close"
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
          {children}
        </Alert>
      </Collapse>
    </Box>
  )
}

export default memo(TransitionAlerts)
