import { createClient } from 'contentful'

export type TGetDataContent = {
  typeContent: string
  views?: number
  skip?: number
  limit?: number
  order?: string
  query?: object
  preview?: boolean
}

const deliveryCall = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
}

const previewCall = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN as string,
  host: 'preview.contentful.com',
}

export const getDataContent = async ({
  typeContent,
  skip = 0,
  limit,
  order,
  query = {},
  preview = false,
}: TGetDataContent) => {
  const call = preview ? previewCall : deliveryCall

  const client = createClient(call)

  const res = await client.getEntries({
    content_type: typeContent,
    order,
    skip,
    limit,
    ...query,
  })

  return res.items
}
