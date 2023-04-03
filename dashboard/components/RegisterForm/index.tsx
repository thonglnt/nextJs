import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Box, Checkbox, Divider, Typography, useTheme } from '@mui/material'
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
import CardActions from '@components/CardActions'

export interface IRegisterFormProps {
  handleSubmitForm: (data: IAccount) => void
  error: {
    email: string
    password: string
  }
}

const RegisterForm = ({ handleSubmitForm, error }: IRegisterFormProps) => {
  const theme = useTheme()

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IAccount>()

  const onSubmit: SubmitHandler<IAccount> = (data) => {
    handleSubmitForm(data)
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
        Register
      </Typography>
      <Typography
        color={theme.palette.grey[600]}
        fontSize={14}
        lineHeight="22px"
        marginTop="18px"
        marginBottom="25px"
      >
        Register on the internal platform
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
      <Box display="flex" alignItems="center">
        <Checkbox defaultChecked color="secondary" />
        <Typography fontSize="13px" lineHeight="22px" marginRight="2px">
          I have read the
        </Typography>
        <CardActions title=" Terms and Conditions" href="#" />
      </Box>
      <Button type="submit" fullWidth variant="contained" color="secondary">
        Register
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
        <Link href={ROUTE.LOGIN} prefetch={false}>
          <Typography
            paddingLeft={0.5}
            color={theme.palette.info.main}
            fontSize={14}
            fontWeight={500}
          >
            Having an account
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default RegisterForm
