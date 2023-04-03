import { ParsedUrlQuery } from 'querystring'

export interface PostPathParams extends ParsedUrlQuery {
  slug: string
}
