// Utils
import { axiosInstance } from '@utils/api'

// Types
import { IUser } from '@self-types/index'

// Constants
import { USERS_ENDPOINT } from '@constants/endPoints'

export const authRegister = (data: IUser) => {
  return axiosInstance.post(USERS_ENDPOINT, data)
}
