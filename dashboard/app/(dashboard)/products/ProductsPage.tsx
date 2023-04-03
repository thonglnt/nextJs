'use client'

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'

// Components
import Breadcrumbs from '@components/Breadcrumbs'
import CollapsibleTable, { IRow } from '@components/CollapsibleTable'

// Constants
import { MOCK_DATA_PRODUCTS } from '@constants/mockData'

const ProductsPage = () => {
  const theme = useTheme()

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '64px 0',
      }}
    >
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h2"
            fontSize="32px"
            lineHeight="38px"
            fontWeight={800}
          >
            Products
          </Typography>
          <Button
            startIcon={<AddIcon fontSize="small" />}
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
            variant="contained"
          >
            Add
          </Button>
        </Box>
        <Breadcrumbs title="List" />
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
        <Divider />
        <Box padding="32px 24px">
          <Typography color={theme.palette.grey[500]}>
            No filters applied
          </Typography>
        </Box>
        <Divider />
        <CollapsibleTable rows={MOCK_DATA_PRODUCTS as IRow[]} />
      </Card>
    </Container>
  )
}

export default ProductsPage
