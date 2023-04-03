// Constants
import { BASE_API_URL, BASE_URL } from '@constants/index'

export type Methods = 'SSR' | 'ISR'

export type FetchOptionsType = {
  endpoint: RequestInfo | URL
  fetchingMethod?: Methods
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
      // update run time => ISR
      response = await fetch(endpoint, { next: { revalidate: 10 } })
      break
    case 'SSR':
      // This request should be refetched on every request.
      // Similar to `getServerSideProps`.
      response = await fetch(endpoint, { cache: 'no-store' })
      break
    default:
      // SSG
      // This request should be cached until manually invalidated.
      // Similar to `getStaticProps`.
      // `force-cache` is the default and can be omitted.
      response = await fetch(endpoint, { cache: 'force-cache' })
  }

  if (!response?.ok) {
    return response
  }

  return response?.json()
}

export const fetcherInstance = async ({
  endpoint,
  fetchingMethod,
}: {
  endpoint: string
  fetchingMethod?: Methods
}) => {
  // eslint-disable-next-line no-return-await
  return await basicFetch({
    endpoint: `${BASE_URL}${endpoint}`,
    fetchingMethod,
  })
}

export const fetcherInstanceAPI = async ({
  endpoint,
  fetchingMethod,
}: {
  endpoint: string
  fetchingMethod?: Methods
}) => {
  // eslint-disable-next-line no-return-await
  return await basicFetch({
    endpoint: `${BASE_API_URL}${endpoint}`,
    fetchingMethod,
  })
}

export const swrFetcher = async (url: string) => {
  const response = await fetch(`${BASE_API_URL}${url}`)

  return response.json()
}
