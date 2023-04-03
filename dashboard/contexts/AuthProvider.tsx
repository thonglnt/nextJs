'use client'

import React, { createContext, useMemo, useState } from 'react'

// Utils
import { getLocalStorage } from '@utils/localStorage'

// Constants
import { LOCAL_STORAGE_KEY } from '@constants/index'

export interface IAuthContext {
  userId: string
  setUserId: (id: string) => void
}

export const AuthContext = createContext<IAuthContext>({
  userId: '',
  setUserId: () => undefined,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string>(
    getLocalStorage(LOCAL_STORAGE_KEY.USER_ID) || '',
  )

  const value = useMemo(
    () => ({ userId, setUserId: (id: string) => setUserId(id) }),
    [userId],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
