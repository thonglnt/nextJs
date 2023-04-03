export interface IAccount {
  email: string
  password: string
}

export interface IUser extends IAccount {
  id: string
  name: string
  avatar: string
}

export interface UserSession {
  accessToken: string
  user: Omit<IUser, 'password'>
}

export interface IProduct {
  name: string
  desc: string
  images: string
  oldPrice: string
  newPrice: string
  category: string
  barcode: number
  sku: string
}
