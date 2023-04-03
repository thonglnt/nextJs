import { notFound } from 'next/navigation'

// Services
import { ApiEndpoint, fetchProducts } from '@services/Posts'

// Types
import { BlogProps } from '@self-types/BlogProps.types'
import { IListPost } from '@self-types/ListPost.types'

// Constants
import { ITEM_PER_PAGE } from '@constants/index'
import CategoryPage from './CategoryPage'

// Components

type Props = {
  params: {
    category: string
    page: string
  }
}

async function getPaths(params: string) {
  const endPoint = ApiEndpoint({
    typeContent: 'blogPost',
    query: `&fields.categories=${params}`,
  })

  const response = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'SSG',
  })

  return response
}

async function getData(params: string) {
  const endPoint = ApiEndpoint({
    typeContent: 'blogPost',
    query: params,
  })

  const response = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'ISR',
  })

  return response
}

export async function generateStaticParams() {
  const endPoint = ApiEndpoint({
    typeContent: 'category',
  })

  const response = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'SSG',
  })

  const paths = await Promise.all(
    response.items.map(async (item: BlogProps) => {
      const { slug } = item.fields as { slug: string }

      const slugUrl = slug === 'most-views' ? 'blog' : slug

      // Get data by category
      const categoryItem = await getPaths(slugUrl)

      // Calculator total Page
      const totalPage = Math.ceil(categoryItem.items.length / ITEM_PER_PAGE)

      return Array.from(
        {
          length: totalPage,
        },
        (_, i) => {
          return {
            category: slug,
            page: (i + 1).toString(),
          }
        },
      )
    }),
  )

  return paths.flat()
}

export default async function Page({ params }: Props) {
  const { category, page } = params || ''

  const skip = (parseInt(page, 10) - 1) * ITEM_PER_PAGE
  const categoryEndPoint = `&skip=${skip}&=limit${ITEM_PER_PAGE}&fields.categories=${category}`
  const mostViewEndPoint = `&skip=${skip}&=limit${ITEM_PER_PAGE}&fields.categories=blog&fields.view[gte]=500`

  const response = await getData(
    category === 'most-views' ? mostViewEndPoint : categoryEndPoint,
  )

  if (!response?.length && response?.status === 404) {
    notFound()
  }

  const dataFields = response.items.map(
    (item: { fields: IListPost[] }) => item.fields,
  )

  const data = JSON.stringify(dataFields)

  return (
    <CategoryPage
      blogList={data}
      page={parseInt(page, 10)}
      category={category}
    />
  )
}
