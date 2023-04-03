export type Methods = 'SSR' | 'ISR' | 'SSG'

export type FetchOptionsType = {
  endpoint: RequestInfo | URL
  fetchingMethod?: Methods
}
