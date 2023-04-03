import { Document } from '@contentful/rich-text-types'

export interface IListPost {
  content: Document
  heroImage: [
    {
      url: string
      public_id: string
    },
  ]
  title: string
  description: Document
  view: string
  slug: string
}
