import { notFound } from 'next/navigation'

// Services
import { ApiEndpoint, fetchProducts } from '@services/Posts'

// Types
import { IContentAbout } from '@self-types/ContentAbout.types'
import { IPostDetail } from '@self-types/PostDetail.types'
import { BlogProps } from '@self-types/BlogProps.types'

// Components
import PostDetail from './BlogDetailPage'

type Props = {
  params: {
    slug: string
  }
}

async function getData(params: string) {
  const endPoint = ApiEndpoint({
    typeContent: 'blogPost',
    query: `&fields.slug[in]=${params}`,
  })

  const response = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'SSG',
  })

  return response
}

async function getOtherData(params: string, next: boolean) {
  // Next Post endpoint
  const nextEndPoint = ApiEndpoint({
    typeContent: 'blogPost',
    query: `&order=sys.createdAt&limit=1&sys.createdAt[gt]=${params}`,
  })

  // Previous Post endpoint
  const previousEndPoint = ApiEndpoint({
    typeContent: 'blogPost',
    query: `&order=-sys.createdAt&limit=1&sys.createdAt[lt]=${params}`,
  })

  const response = await fetchProducts({
    endpoint: next ? nextEndPoint : previousEndPoint,
    fetchingMethod: 'SSG',
  })

  return response
}

export async function generateStaticParams() {
  const endPoint = ApiEndpoint({
    typeContent: 'blogPost',
  })

  const products = await fetchProducts({
    endpoint: endPoint,
    fetchingMethod: 'SSG',
  })

  const posts = products.items.map((item: BlogProps) => item.fields)

  return posts.map((item: IPostDetail) => {
    return {
      slug: item.slug,
    }
  })
}

export default async function Page({ params }: Props) {
  const { slug } = params || ''

  const response = await getData(slug)

  const [nextPost, previousPost] = await Promise.all([
    await getOtherData(
      `${response.items.map((item: BlogProps) => item.sys.createdAt)}`,
      true,
    ),
    await getOtherData(
      `${response.items.map((item: BlogProps) => item.sys.createdAt)}`,
      false,
    ),
  ])

  if (!response?.length && response?.status === 404) {
    notFound()
  }

  const dataRecipeFields = response.items.map(
    (item: { fields: IContentAbout[] }) => item.fields,
  )

  const dataNextFields = nextPost.items.map(
    (item: { fields: IContentAbout[] }) => item.fields,
  )

  const dataPreviousFields = previousPost.items.map(
    (item: { fields: IContentAbout[] }) => item.fields,
  )

  const recipe = JSON.stringify(dataRecipeFields)
  const next = JSON.stringify(dataNextFields)
  const previous = JSON.stringify(dataPreviousFields)

  return <PostDetail recipe={recipe} next={next} previous={previous} />
}
