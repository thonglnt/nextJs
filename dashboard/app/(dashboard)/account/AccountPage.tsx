'use client'

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// Components
import Avatar from '@components/Avatar'
import CardActions from '@components/CardActions'
import CardHeader from '@components/CardHeader'
import Input from '@components/Input'
import Logo from '@components/Logo'
import Switch from '@components/Switch'

// Constants
import { MOCK_INVOICE, MOCK_LOGIN_HISTORY, ROUTE } from '@constants/index'

const AccountPage = () => {
  const theme = useTheme()
  const [toggle, setToggle] = useState('general')

  const renderAccountContent = () => {
    if (toggle === 'general') {
      return (
        <Box marginTop="32px">
          {/* Basic details */}
          <Card
            sx={{
              padding: '32px 24px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="18px"
              fontWeight={700}
              lineHeight="25px"
              width="30%"
            >
              Basic details
            </Typography>
            <Box width="69%" display="flex" flexDirection="column" gap="20px">
              <Box display="flex" gap="20px">
                <Avatar
                  type="normal"
                  sx={{
                    width: '56px',
                    height: '56px',
                  }}
                />
                <Button
                  variant="text"
                  color="success"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  change
                </Button>
              </Box>
              <Box display="flex">
                <Input
                  fullWidth
                  label="Full name"
                  name="fullName"
                  defaultValue="Shen Zen"
                />
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                  }}
                  disabled
                >
                  Save
                </Button>
              </Box>
              <Box display="flex">
                <Input
                  fullWidth
                  label="Email address"
                  name="email"
                  defaultValue="shen.zen@acme.com"
                  disabled
                />
                <Button
                  variant="text"
                  color="secondary"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Box>
          </Card>

          {/* Public profile */}
          <Card
            sx={{
              marginTop: '32px',
              padding: '32px 24px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="18px"
              fontWeight={700}
              lineHeight="25px"
              width="30%"
            >
              Public profile
            </Typography>
            <Box width="69%" display="flex" flexDirection="column" gap="24px">
              <Box display="flex">
                <CardHeader
                  title="Make Contact info Public"
                  desc="Means that anyone viewing yo your profile will be able to see your contacts details"
                />
                <Switch />
              </Box>
              <Divider />
              <Box display="flex">
                <CardHeader
                  title="Available to hire"
                  desc="Toggling this will let your teammates know that you are available for acquiring new projects"
                />
                <Switch defaultChecked />
              </Box>
            </Box>
          </Card>

          {/* Deleted account */}
          <Card
            sx={{
              marginTop: '32px',
              padding: '32px 24px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="18px"
              fontWeight={700}
              lineHeight="25px"
              width="30%"
            >
              Deleted account
            </Typography>
            <Box width="69%" display="flex" flexDirection="column" gap="20px">
              <Typography fontSize="16px" fontWeight={700} lineHeight="28px">
                Delete your account and all of your source data. This is
                irreversible.
              </Typography>
              <Button variant="outlined" color="error">
                Deleted account
              </Button>
            </Box>
          </Card>
        </Box>
      )
    }

    if (toggle === 'billing') {
      return (
        <Box marginTop="32px">
          <Card
            sx={{
              padding: '32px 24px',
            }}
          >
            <CardHeader
              title="Change plan"
              desc="You can upgrade and downgrade whenever you want."
            />

            <Box display="flex" justifyContent="space-between" gap="30px">
              <Card
                sx={{
                  padding: '32px 24px',
                  width: '100%',
                }}
              >
                <Logo />
                <Box
                  display="flex"
                  alignItems="center"
                  color={theme.palette.grey[600]}
                  marginTop="37px"
                  gap="4px"
                >
                  <Typography
                    fontSize="24px"
                    fontWeight={800}
                    lineHeight="33px"
                    color="black"
                  >
                    $0
                  </Typography>{' '}
                  /mo
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography fontSize="12px" lineHeight="30px">
                    STARTUP
                  </Typography>
                  <CardActions
                    title="Using now"
                    href={ROUTE.DEFAULT}
                    color={theme.palette.success.light}
                  />
                </Box>
              </Card>
              <Card
                sx={{
                  padding: '32px 24px',
                  width: '100%',
                }}
              >
                <Logo />
                <Box
                  display="flex"
                  alignItems="center"
                  color={theme.palette.grey[600]}
                  marginTop="37px"
                  gap="4px"
                >
                  <Typography
                    fontSize="24px"
                    fontWeight={800}
                    lineHeight="33px"
                    color="black"
                  >
                    $4.99
                  </Typography>{' '}
                  /mo
                </Box>
                <Typography fontSize="12px" lineHeight="30px">
                  STANDARD
                </Typography>
              </Card>
              <Card
                sx={{
                  padding: '32px 24px',
                  width: '100%',
                }}
              >
                <Logo />
                <Box
                  display="flex"
                  alignItems="center"
                  color={theme.palette.grey[600]}
                  marginTop="37px"
                  gap="4px"
                >
                  <Typography
                    fontSize="24px"
                    fontWeight={800}
                    lineHeight="33px"
                    color="black"
                  >
                    $29.99
                  </Typography>{' '}
                  /mo
                </Box>
                <Typography fontSize="12px" lineHeight="30px">
                  BUSINESS
                </Typography>
              </Card>
            </Box>
            <Divider
              sx={{
                margin: '24px 0',
              }}
            />
            <CardHeader
              title="Invoice history"
              desc="You can view and download all your previous invoices here. If you've just made a payment, it may take a few hours for it to appear in the table below."
            />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>DATE</TableCell>
                  <TableCell>TOTAL (INCL. TAX)</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {MOCK_INVOICE.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{`$${item.total}`}</TableCell>
                    <TableCell align="right">
                      <CardActions title="View invoice" href={ROUTE.DEFAULT} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Box>
      )
    }

    if (toggle === 'security') {
      return (
        <Box marginTop="32px">
          <Card
            sx={{
              padding: '32px 24px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="18px"
              fontWeight={700}
              lineHeight="25px"
              width="30%"
            >
              Change password
            </Typography>
            <Box width="69%" display="flex" gap="20px">
              <Input
                fullWidth
                label="Password"
                name="password"
                defaultValue="12312312312"
                type="password"
                disabled
              />
              <Switch defaultChecked />
            </Box>
          </Card>
          <Card
            sx={{
              marginTop: '32px',
              padding: '32px 24px',
            }}
          >
            <Typography fontSize="18px" fontWeight={700} lineHeight="25px">
              Multi Factor Authentication
            </Typography>
            <Box marginTop="24px" display="flex" gap="32px">
              <Card
                sx={{
                  padding: '36px 24px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <Typography
                  color={theme.palette.error.light}
                  fontSize="14px"
                  lineHeight="22px"
                >
                  Off
                </Typography>
                <CardHeader
                  title="Authenticator App"
                  desc="Use an authenticator app to generate one time security codes."
                />

                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    maxWidth: '110px',
                  }}
                >
                  Set Up
                </Button>
              </Card>
              <Card
                sx={{
                  padding: '36px 24px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <Typography
                  color={theme.palette.error.light}
                  fontSize="14px"
                  lineHeight="22px"
                >
                  Off
                </Typography>
                <CardHeader
                  title="Text Message"
                  desc="Use your mobile to receive security code via SMS."
                />
                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    maxWidth: '110px',
                  }}
                >
                  Set Up
                </Button>
              </Card>
            </Box>
          </Card>
          <Card
            sx={{
              marginTop: '32px',
              padding: '32px 24px',
            }}
          >
            <CardHeader
              title="Login history"
              desc="Your recent login activity:"
            />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>LOGIN TYPES</TableCell>
                  <TableCell>IP ADDRESS</TableCell>
                  <TableCell>CLIENTS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {MOCK_LOGIN_HISTORY.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <CardHeader title="Credentials login" desc={item.type} />
                    </TableCell>
                    <TableCell>{item.ip}</TableCell>
                    <TableCell>{item.client}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Box>
      )
    }
    return <Box>No content</Box>
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '64px 0',
      }}
    >
      <Box>
        <Typography
          variant="h2"
          fontSize="32px"
          lineHeight="38px"
          fontWeight={800}
        >
          Account
        </Typography>
      </Box>
      <Box marginTop="44px">
        <Box display="flex" gap="32px">
          <Button
            onClick={() => setToggle('general')}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            <Typography
              fontSize="18px"
              lineHeight="24px"
              fontWeight={500}
              color={theme.palette.secondary.main}
            >
              General
            </Typography>
          </Button>
          <Button
            onClick={() => setToggle('billing')}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            <Typography
              fontSize="18px"
              lineHeight="24px"
              fontWeight={500}
              color={theme.palette.secondary.main}
              sx={{
                cursor: 'pointer',
              }}
            >
              Billing
            </Typography>
          </Button>
          <Button
            onClick={() => setToggle('security')}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            <Typography
              fontSize="18px"
              lineHeight="24px"
              fontWeight={500}
              color={theme.palette.secondary.main}
              sx={{
                cursor: 'pointer',
              }}
            >
              Security
            </Typography>
          </Button>
        </Box>
        <Divider
          sx={{
            marginTop: '12px',
          }}
        />
        {renderAccountContent()}
      </Box>
    </Container>
  )
}

export default AccountPage
