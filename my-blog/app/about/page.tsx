import { notFound } from 'next/navigation'

// Services
import { ApiEndpoint, fetchProducts } from '@services/Posts'

// Types
import { IContentAbout } from '@self-types/ContentAbout.types'

// Components
import AboutPage from './AboutPage'

async function getData() {
  const endPoint = ApiEndpoint({
    typeContent: 'author',
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
    (item: { fields: IContentAbout[] }) => item.fields,
  )

  const data = JSON.stringify(dataFields)

  return <AboutPage content={data} />
}
