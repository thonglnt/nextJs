import { IListPost } from './ListPost.types'

export type BlogProps = {
  fields: IListPost
  sys: {
    space: object
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: object
    revision: number
    contentType: object
    locale: string
  }
}
