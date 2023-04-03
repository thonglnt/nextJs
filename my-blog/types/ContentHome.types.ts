import { Document } from '@contentful/rich-text-types'

export interface IContentHome {
  author: string
  image: [
    {
      url: string
    },
  ]
  foreword: Document
}
