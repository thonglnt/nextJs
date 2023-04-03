import { notFound } from 'next/navigation'

// Types
import { IContentHome } from '@self-types/ContentHome.types'

// Services
import { ApiEndpoint, fetchProducts } from '@services/Posts'

// Components
import HomePage from './HomePage'

export const dynamicParams = false

async function getData() {
  const endPoint = ApiEndpoint({
    typeContent: 'homePage',
  })

  const response = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'SSG',
  })

  return response
}

export default async function Page() {
  const response = await getData()

  if (!response?.length && response?.status === 404) {
    notFound()
  }

  const dataFields = response.items.map(
    (item: { fields: IContentHome[] }) => item.fields,
  )

  const data = JSON.stringify(dataFields)

  return <HomePage content={data} />
}
