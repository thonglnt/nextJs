'use client'

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

// Components
import Avatar from '@components/Avatar'

const DetailCustomerPage = () => {
  const theme = useTheme()

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '64px 0',
      }}
    >
      <Button
        startIcon={<ArrowBackIcon fontSize="small" />}
        sx={{
          textTransform: 'capitalize',
        }}
      >
        Customers
      </Button>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" gap="16px">
          <Avatar
            type="letter"
            sx={{
              width: '64px',
              height: '64px',
            }}
          />
          <Box display="flex" flexDirection="column">
            <Typography fontSize="24px" lineHeight="33px" fontWeight={600}>
              adam.dennisov@devias.io
            </Typography>
            <Typography>
              user_id: <Chip label="5e86805e2bafd54f66cc95c3" />
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap="16px">
          <Button
            sx={{
              textTransform: 'capitalize',
              maxHeight: '40px',
            }}
            color="secondary"
            endIcon={<BorderColorIcon fontSize="small" />}
            variant="outlined"
          >
            Edit
          </Button>
          <Button
            sx={{
              textTransform: 'capitalize',
              maxHeight: '40px',
            }}
            color="secondary"
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            variant="contained"
          >
            Actions
          </Button>
        </Box>
      </Box>

      {/* Basic Details */}
      <Card
        sx={{
          marginTop: '32px',
        }}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="25px"
          padding="32px 24px"
        >
          Basic details
        </Typography>
        <Divider />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                adam.denisov@devias.io
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Phone
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                +55 748 327 439
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Country
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                Germany
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                State/Region
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                Munich
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Address 1
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                Street John Wick, no. 7
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Address 2
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                House #25
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Divider />
        <Box padding="16px 24px" display="flex" gap="32px">
          <Button
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
            variant="outlined"
          >
            Reset & Send Password
          </Button>
          <Button
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
          >
            Login as Customer
          </Button>
        </Box>
      </Card>

      {/* Payment */}
      <Card
        sx={{
          marginTop: '32px',
        }}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="25px"
          padding="32px 24px"
        >
          Payment
        </Typography>
        <Divider />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Credit Card
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                **** **** **** **** 4142
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Paid
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                2 ($50.00)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Draft
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                2 ($50.00)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Unpaid/Due
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                2 ($50.00)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Refunded
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                2 ($50.00)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  padding: '24px',
                }}
              >
                Gross Income
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.grey[700],
                }}
              >
                $1,200.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Divider />
        <Box padding="16px 24px" display="flex" gap="32px">
          <Button
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
            variant="outlined"
          >
            Create Invoice
          </Button>
          <Button
            sx={{
              textTransform: 'capitalize',
            }}
            color="secondary"
          >
            Resend Due Invoices
          </Button>
        </Box>
      </Card>

      {/* Data Management */}
      <Card
        sx={{
          marginTop: '32px',
        }}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="25px"
          padding="32px 24px"
        >
          Data Management
        </Typography>
        <Divider />
        <Box padding="24px">
          <Button
            variant="outlined"
            sx={{
              textTransform: 'capitalize',
            }}
            color="error"
          >
            Deleted account
          </Button>
          <Typography color={theme.palette.grey[500]} marginTop="16px">
            Remove this customer’s data if he requested that, if not please be
            aware that what has been deleted can never brough back.
          </Typography>
        </Box>
      </Card>
    </Container>
  )
}

export default DetailCustomerPage
