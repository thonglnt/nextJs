import { useContext } from 'react'

// Contexts
import { AuthContext } from '@contexts/AuthProvider'

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  return authContext
}
