'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Types
import { IAccount, IUser } from '@self-types/index'

// Utils
import { loginValidate } from '@utils/validation'
import { setLocalStorage } from '@utils/localStorage'

// Services
import { fetcherInstance } from '@services/index'

// Components
import LoginForm from '@components/LoginForm'

// Constants
import { USERS_ENDPOINT } from '@constants/endPoints'
import { LOCAL_STORAGE_KEY } from '@constants/variables'
import { ROUTE } from '@constants/route'
import { log } from 'console'

const initErrorMsgs = {
  email: '',
  password: '',
}

const LoginPage = () => {
  const router = useRouter()
  const { userId, setUserId } = useAuthContext()
  const [errorMsgs, setErrorMsgs] = useState(initErrorMsgs)

  if (userId) {
    router.push(ROUTE.HOME_PAGE)
  }

  const handleLogin = useCallback(
    async (account: IAccount) => {
      const users: IUser[] = await fetcherInstance({
        endpoint: USERS_ENDPOINT,
      })

      const loginFormValidate = loginValidate(account, users)

      if (!loginFormValidate.isValid && loginFormValidate.error) {
        setErrorMsgs(loginFormValidate.error)
      } else {
        const idUser = loginFormValidate.data?.userId
        console.log('id', idUser)
        setUserId(idUser || '')

        setLocalStorage(
          LOCAL_STORAGE_KEY.USER_ID,
          loginFormValidate.data?.userId,
        )

        router.push(ROUTE.HOME_PAGE)
      }
    },
    [router, setUserId],
  )

  // const handleLogin = () => {
  //   router.push(ROUTE.HOME_PAGE)
  // }

  return <LoginForm handleSubmitForm={handleLogin} error={errorMsgs} />
}

export default LoginPage
