import { Document } from '@contentful/rich-text-types'

export interface IContentAbout {
  avatar: [
    {
      url: string
    },
  ]
  blog: string
  description: string
  name: string
  introduceBlog: Document
  introduceYourself: Document
}
