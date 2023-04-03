import { notFound } from 'next/navigation'

// Services
import { ApiEndpoint, fetchProducts } from '@services/Posts'

// Types
import { IListPost } from '@self-types/ListPost.types'

// Constants
import { ITEM_PER_PAGE } from '@constants/index'

// Components
import BlogPage from './BlogPage'

type Props = {
  params: {
    page: string
  }
}

async function getData(params: string) {
  const skip = (parseInt(params, 10) - 1) * ITEM_PER_PAGE
  const endPoint = ApiEndpoint({
    typeContent: 'blogPost',
    query: `&fields.categories=blog&limit=${ITEM_PER_PAGE}&skip=${skip}`,
  })

  const response = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'ISR',
  })

  return response
}

export async function generateStaticParams() {
  const endPoint = ApiEndpoint({
    typeContent: 'blogPost',
    query: '&fields.categories=blog',
  })

  const products = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'SSG',
  })

  const totalPage = Math.ceil(products.items.length / ITEM_PER_PAGE)

  const page = Array.from(
    {
      length: totalPage,
    },
    (_, i) => {
      return {
        page: (i + 1).toString(),
      }
    },
  )

  return page
}

export default async function Page({ params }: Props) {
  const { page } = params || ''

  const response = await getData(page)

  if (!response?.length && response?.status === 404) {
    notFound()
  }

  const dataFields = response.items.map(
    (item: { fields: IListPost[] }) => item.fields,
  )

  const data = JSON.stringify(dataFields)

  return <BlogPage blogList={data} page={parseInt(page, 10)} />
}
