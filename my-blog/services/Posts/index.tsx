// Constants
import { CONTENFUL_BASE_URL } from '@constants/index'

// Types
import { FetchOptionsType, Methods } from '@self-types/Service.types'

/**
 * Import content types based on your existing content models
 */
type TTypeContent = 'blogPost' | 'author' | 'category' | 'homePage'

type TApiEndpoint = {
  typeContent: TTypeContent
  query?: string
}

/**
 *
 * @param typeContent Get only predefined content types
 * @param query get a string of desired queries against the url
 * You can read more about queries here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference
 * @returns url
 */
export const ApiEndpoint = ({
  typeContent,
  query = '',
}: TApiEndpoint): string => {
  return `${CONTENFUL_BASE_URL}${
    typeContent ? `&content_type=${typeContent}` : ''
  }${query}`
}

export const basicFetch = async ({
  endpoint,
  fetchingMethod,
}: FetchOptionsType) => {
  let response

  switch (fetchingMethod) {
    case 'ISR':
      // This request should be cached with a lifetime of 10 seconds.
      // Similar to `getStaticProps` with the `revalidate` option.
      response = await fetch(endpoint, { next: { revalidate: 10 } })
      break
    case 'SSR':
      // This request should be refetched on every request.
      // Similar to `getServerSideProps`.
      response = await fetch(endpoint, { cache: 'no-store' })
      break
    case 'SSG':
      // This request should be cached until manually invalidated.
      // Similar to `getStaticProps`.
      // `force-cache` is the default and can be omitted.
      response = await fetch(endpoint, { cache: 'force-cache' })
      break
    default:
    // response.json({ message: "Welcome to API Routes!" });
  }

  if (!response?.ok) {
    return response
  }

  const data = await response?.json()

  return data
}

// Fetch blog list
export const fetchProducts = async ({
  endpoint,
  fetchingMethod,
}: {
  endpoint: string
  fetchingMethod?: Methods
}) => {
  const data = await basicFetch({
    endpoint,
    fetchingMethod,
  })

  return data
}
