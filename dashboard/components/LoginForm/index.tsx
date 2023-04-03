import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

// Constants
import {
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD,
  REGEX_EMAIL,
  REQUIRED,
} from '@constants/index'
import { ROUTE } from '@constants/route'

// Components
import Button from '@components/Button'
import Input from '@components/Input'
import Logo from '@components/Logo'

// Types
import { IAccount } from '@self-types/index'
// import { useRouter } from 'next/navigation'

export interface ILoginFormProps {
  handleSubmitForm: (data: IAccount) => void
  error: {
    email: string
    password: string
  }
}

const LoginForm = ({ handleSubmitForm, error }: ILoginFormProps) => {
  const theme = useTheme()
  // const router = useRouter()

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IAccount>()

  const onSubmit: SubmitHandler<IAccount> = (data) => {
    handleSubmitForm(data)
    console.log('data', data)
    // router.push(ROUTE.HOME_PAGE)
  }

  return (
    <Box
      minWidth={350}
      maxWidth={450}
      padding="32px"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      bgcolor={theme.palette.common.white}
      borderRadius="8px"
      boxShadow="rgb(100 116 139 / 12%) 0px 10px 15px"
    >
      <Logo />
      <Typography
        color={theme.palette.common.black}
        fontWeight={600}
        fontSize={24}
        variant="h5"
        textAlign="center"
        lineHeight="33px"
      >
        Log in
      </Typography>
      <Typography
        color={theme.palette.grey[600]}
        fontSize={14}
        lineHeight="22px"
        marginTop="18px"
        marginBottom="25px"
      >
        Sign in on the internal platform
      </Typography>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: { value: true, message: REQUIRED },
          pattern: { value: REGEX_EMAIL, message: INVALID_EMAIL_FORMAT },
        }}
        render={({ field }) => (
          <Input
            label="Email Address"
            error={!!errors.email || !!error.email}
            errorMsg={
              ((errors.email && errors.email.message) || error.email) as string
            }
            type="text"
            fullWidth
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: { value: true, message: REQUIRED },
          minLength: { value: 8, message: INVALID_PASSWORD },
        }}
        render={({ field }) => (
          <Input
            label="Password"
            error={!!errors.password || !!error.password}
            errorMsg={
              ((errors.password && errors.password.message) ||
                error.password) as string
            }
            type="password"
            fullWidth
            {...field}
            sx={{
              marginTop: '15px',
              marginBottom: '25px',
            }}
          />
        )}
      />
      <Button type="submit" fullWidth variant="contained" color="secondary">
        Log In
      </Button>
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          marginTop: '25px',
          marginBottom: '30px',
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        alignItems="flex-start"
      >
        <Link href={ROUTE.REGISTER} prefetch={false}>
          <Typography
            paddingLeft={0.5}
            color={theme.palette.info.main}
            fontSize={14}
            fontWeight={500}
          >
            Create new account
          </Typography>
        </Link>
        <Link href={ROUTE.FORGOT_PASSWORD} prefetch={false}>
          <Typography
            paddingLeft={0.5}
            color={theme.palette.info.main}
            fontSize={14}
            fontWeight={500}
          >
            Forgot password
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default LoginForm
