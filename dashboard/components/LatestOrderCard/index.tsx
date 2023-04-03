import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

// Mocks Data
import { MOCK_ORDERS } from '@constants/mockData'
import { SeverityPill } from '@components/SeverityPill'

export const LatestOrders = () => (
  <Card>
    <CardHeader title="Latest Orders" />
    <Box sx={{ minWidth: 800 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order Ref</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell sortDirection="desc">
              <Tooltip enterDelay={300} title="Sort">
                <TableSortLabel active direction="desc">
                  Date
                </TableSortLabel>
              </Tooltip>
            </TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MOCK_ORDERS.map((order) => (
            <TableRow hover key={order.id}>
              <TableCell>{order.ref}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>{order.createdAt}</TableCell>
              <TableCell>
                <SeverityPill
                  color={
                    (order.status === 'delivered' && 'success') ||
                    (order.status === 'refunded' && 'error') ||
                    'warning'
                  }
                >
                  {order.status}
                </SeverityPill>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
)
