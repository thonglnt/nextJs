'use client'

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

// Components
import Avatar from '@components/Avatar'
import Input from '@components/Input'
import CardHeader from '@components/CardHeader'
import Switch from '@components/Switch'

const EditCustomerPage = () => {
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
          Edit Customer
        </Typography>
        <Divider />
        <Box display="flex" flexWrap="wrap" gap="24px" padding="32px 24px">
          <Input
            label="Full name*"
            defaultValue="Miron Vitold"
            sx={{
              width: '540px',
            }}
          />
          <Input
            label="Email address*"
            defaultValue="miron.vitold@devias.io"
            sx={{
              width: '540px',
            }}
          />
          <Input
            label="Country"
            defaultValue="USA"
            sx={{
              width: '540px',
            }}
          />
          <Input
            label="State/Region"
            defaultValue="New York"
            sx={{
              width: '540px',
            }}
          />
          <Input
            label="Address 1"
            defaultValue="Street John Wick, no. 7"
            sx={{
              width: '540px',
            }}
          />
          <Input
            label="Address 2"
            defaultValue="House #25"
            sx={{
              width: '540px',
            }}
          />
          <Input
            label="Phone number"
            defaultValue="+55 748 327 439"
            sx={{
              width: '540px',
            }}
          />
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" padding="24px">
          <CardHeader
            title="Make Contact Info Public"
            desc="Means that anyone viewing your profile will be able to see your contacts details"
          />
          <Switch defaultChecked />
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" padding="24px">
          <CardHeader
            title="Available to hire"
            desc="Toggling this will let your teammates know that you are available for acquiring new projects"
          />
          <Switch />
        </Box>
        <Box display="flex" justifyContent="space-between" padding="16px 24px">
          <Box display="flex" gap="32px">
            <Button
              sx={{
                textTransform: 'capitalize',
              }}
              color="secondary"
              variant="contained"
            >
              Update
            </Button>
            <Button
              sx={{
                textTransform: 'capitalize',
              }}
              color="secondary"
              variant="outlined"
            >
              cancel
            </Button>
          </Box>
          <Button
            sx={{
              textTransform: 'capitalize',
            }}
            color="error"
          >
            Delete user
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default EditCustomerPage
