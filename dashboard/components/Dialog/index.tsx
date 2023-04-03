import Button from '@components/Button'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import { memo, ReactNode } from 'react'

export interface IAlertDialog {
  isOpen: boolean
  onClose?: () => void
  title: string
  content: string | ReactNode
  cancelTitle?: string
  confirmTitle?: string
}
const AlertDialog = ({
  isOpen,
  onClose,
  title,
  content,
  cancelTitle,
  confirmTitle,
}: IAlertDialog) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelTitle}</Button>
        <Button onClick={onClose} autoFocus>
          {confirmTitle}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(AlertDialog)
