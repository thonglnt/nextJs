'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Types
import { IAccount, IUser } from '@self-types/index'

// Utils
import { registerValidate } from '@utils/validation'
import { setLocalStorage } from '@utils/localStorage'

// Services
import { fetcherInstance } from '@services/index'
import { authRegister } from '@services/authService'

// Components
import RegisterForm from '@components/RegisterForm'

// Constants
import {
  ROUTE,
  SUCCESS_RESPONSE,
  LOCAL_STORAGE_KEY,
  USERS_ENDPOINT,
  SERVER_ERROR,
} from '@constants/index'

const initErrorMsgs = {
  email: '',
  password: '',
}

const RegisterPage = () => {
  const router = useRouter()
  const { userId, setUserId } = useAuthContext()
  const [errorMsgs, setErrorMsgs] = useState(initErrorMsgs)

  if (userId) {
    router.push(ROUTE.HOME_PAGE)
  }

  const handlerRegister = useCallback(
    async (account: IAccount) => {
      const users: IUser[] = await fetcherInstance({
        endpoint: USERS_ENDPOINT,
      })

      const registerFormValidate = registerValidate(account, users)

      if (!registerFormValidate.isValid && registerFormValidate.error) {
        setErrorMsgs(registerFormValidate.error)
      } else {
        const user: IUser = {
          id: '',
          name: 'Anika Visser',
          avatar:
            'https://res.cloudinary.com/dmxoarerm/image/upload/v1669608161/samples/people/boy-snow-hoodie.jpg',
          email: account.email,
          password: account.password,
        }
        const res = await authRegister(user)

        if (res.status === SUCCESS_RESPONSE.CREATED) {
          const idUser = registerFormValidate.data?.userId
          setUserId(idUser || '')

          setLocalStorage(
            LOCAL_STORAGE_KEY.USER_ID,
            registerFormValidate.data?.userId,
          )

          router.push(ROUTE.HOME_PAGE)
        } else {
          throw new Error(SERVER_ERROR)
        }
      }
    },
    [router, setUserId],
  )

  return <RegisterForm handleSubmitForm={handlerRegister} error={errorMsgs} />
}

export default RegisterPage
