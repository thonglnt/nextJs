import { Document } from '@contentful/rich-text-types'

export interface IPostDetail {
  slug: string
  title: string
  heroImage: [
    {
      url: string
      public_id: string
    },
  ]
  content: Document
}
