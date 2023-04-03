'use client'

import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import DownloadIcon from '@mui/icons-material/Download'
import SearchIcon from '@mui/icons-material/Search'

// Components
import TableCheckbox from '@components/CheckBoxTable'

// Mocks data
import { MOCK_DATA_CUSTOMERS } from '@constants/mockData'

const CustomerPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '64px 0',
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h2"
          fontSize="32px"
          lineHeight="38px"
          fontWeight={800}
        >
          Customers
        </Typography>
        <Box display="flex" gap="10px">
          <Button
            startIcon={<UploadIcon fontSize="small" />}
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
          >
            Import
          </Button>
          <Button
            startIcon={<DownloadIcon fontSize="small" />}
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
          >
            Export
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
          >
            Add Customers
          </Button>
        </Box>
      </Box>
      <Card sx={{ padding: '32px 24px', marginTop: '32px' }}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          placeholder="Search customer"
          variant="outlined"
          color="secondary"
          fullWidth
        />
      </Card>
      <Box marginTop="32px">
        <TableCheckbox rows={MOCK_DATA_CUSTOMERS} />
      </Box>
    </Container>
  )
}

export default CustomerPage
