import {
  Dialog,
  DialogTitle,
  Paper,
  Typography,
  IconButton,
  Box,
  useTheme,
} from '@mui/material'
import { memo } from 'react'
import CloseIcon from '@mui/icons-material/Close'

// Components
import Input from '@components/Input'

export interface ISearchDialog {
  isOpen: boolean
  onClose?: () => void
}

const SearchDialog = ({ isOpen = false, onClose }: ISearchDialog) => {
  const theme = useTheme()

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="title"
      data-testid="modalSearch"
    >
      <Paper
        sx={{
          width: '600px',
          maxWidth: '600px',
        }}
      >
        <DialogTitle
          id="title"
          display="flex"
          justifyContent="space-between"
          bgcolor={theme.palette.secondary.main}
        >
          <Typography
            color={theme.palette.common.white}
            fontSize={16}
            lineHeight="24px"
          >
            Search
          </Typography>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon
              sx={{
                width: '20px',
                height: '20px',
                color: theme.palette.common.white,
              }}
            />
          </IconButton>
        </DialogTitle>
        <Box
          sx={{
            padding: '20px 24px',
          }}
        >
          <Input name="input" label="Search" fullWidth />
        </Box>
      </Paper>
    </Dialog>
  )
}

export default memo(SearchDialog)
