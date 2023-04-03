'use client'

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MoneyIcon from '@mui/icons-material/Money'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import PeopleIcon from '@mui/icons-material/PeopleOutlined'
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

// Components
import { Sales } from '@components/Chart/Sales'
import { TrafficByDevice } from '@components/Chart/TrafficDevice'
import { LatestProducts } from '@components/LatestProductCard'
import { LatestOrders } from '@components/LatestOrderCard'
import { useAuthContext } from '@hooks/useAuthContext'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@constants/route'
import { useEffect } from 'react'

const HomePage = () => {
  const route = useRouter()
  const { userId } = useAuthContext()

  useEffect(() => {
    if (!userId) {
      route.push(ROUTE.LOGIN)
    }
  })

  return (
    <Container
      maxWidth={false}
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
          Overview
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          sx={{
            textTransform: 'capitalize',
          }}
        >
          New App
        </Button>
      </Box>
      <Box
        marginTop="32px"
        display="flex"
        justifyContent="space-between"
        gap="24px"
      >
        {/* BUDGET */}
        <Card sx={{ height: '100%', width: '100%' }}>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  BUDGET
                </Typography>
                <Typography color="textPrimary" variant="h4">
                  $24k
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: 'error.main',
                    height: 56,
                    width: 56,
                  }}
                >
                  <MoneyIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box
              sx={{
                pt: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ArrowDownwardIcon color="error" />
              <Typography
                color="error"
                sx={{
                  mr: 1,
                }}
                variant="body2"
              >
                12%
              </Typography>
              <Typography color="textSecondary" variant="caption">
                Since last month
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* TOTAL CUSTOMER */}
        <Card sx={{ height: '100%', width: '100%' }}>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  TOTAL CUSTOMERS
                </Typography>
                <Typography color="textPrimary" variant="h4">
                  1,6k
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: 'success.main',
                    height: 56,
                    width: 56,
                  }}
                >
                  <PeopleIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                pt: 2,
              }}
            >
              <ArrowUpwardIcon color="success" />
              <Typography
                variant="body2"
                sx={{
                  mr: 1,
                }}
              >
                16%
              </Typography>
              <Typography color="textSecondary" variant="caption">
                Since last month
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* TASKS PROGRESS */}
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  TASKS PROGRESS
                </Typography>
                <Typography color="textPrimary" variant="h4">
                  75.5%
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: 'warning.main',
                    height: 56,
                    width: 56,
                  }}
                >
                  <InsertChartIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box sx={{ pt: 3 }}>
              <LinearProgress value={75.5} variant="determinate" />
            </Box>
          </CardContent>
        </Card>

        {/* TOTAL PROFIT */}
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  TOTAL PROFIT
                </Typography>
                <Typography color="textPrimary" variant="h4">
                  $23k
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: 'primary.main',
                    height: 56,
                    width: 56,
                  }}
                >
                  <AttachMoneyIcon />
                </Avatar>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box marginTop="32px" display="flex" gap="32px">
        {/* Sales Chart */}
        <Box width="75%">
          <Sales />
        </Box>

        {/* TrafficByDevice Chart */}
        <Box width="25%">
          <TrafficByDevice />
        </Box>
      </Box>

      <Box marginTop="32px" display="flex" gap="32px">
        <Box width="25%">
          <LatestProducts />
        </Box>

        <Box width="75%">
          <LatestOrders />
        </Box>
      </Box>
    </Container>
  )
}

export default HomePage
