// Constants
import { SERVER_ERROR, MOCK_LIST_USERS } from '@constants/index'

// Services
import { basicFetch, fetcherInstance, fetcherInstanceAPI, swrFetcher } from '..'

describe('Test swrFetcher', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_LIST_USERS),
    }),
  ) as jest.Mock

  test('Test function swrFetcher is success', async () => {
    try {
      const response = await swrFetcher('/users')
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(MOCK_LIST_USERS.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  test('Test function swrFetcher is error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    try {
      const response = await swrFetcher('/users')
      const responseData = await response.json()
      if (response) {
        expect(response).toBeCalled()
        expect(responseData).toEqual(SERVER_ERROR)
      }
    } catch (error) {
      console.log(error)
    }
  })
})

describe('Test basicFetch', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_LIST_USERS),
    }),
  ) as jest.Mock

  test('Test function basicFetch use default method (SSG) success', async () => {
    try {
      const response = await basicFetch({
        endpoint: '/users',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(MOCK_LIST_USERS.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  test('Test function basicFetch use ISR method success', async () => {
    try {
      const response = await basicFetch({
        endpoint: '/users',
        fetchingMethod: 'ISR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(MOCK_LIST_USERS.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  test('Test function basicFetch use SSR method success', async () => {
    try {
      const response = await basicFetch({
        endpoint: '/users',
        fetchingMethod: 'SSR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(MOCK_LIST_USERS.length)
      }
    } catch (error) {
      console.log(error)
    }
  })
})

describe('Test fetcherInstanceAPI', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_LIST_USERS),
    }),
  ) as jest.Mock

  test('Test function fetcherInstanceAPI is success', async () => {
    try {
      const response = await fetcherInstanceAPI({
        endpoint: '/users',
        fetchingMethod: 'SSR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(MOCK_LIST_USERS.length)
      }
    } catch (error) {
      console.log(error)
    }
  })
})

describe('Test fetcherInstance', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_LIST_USERS),
    }),
  ) as jest.Mock

  test('Test function fetcherInstance is success', async () => {
    try {
      const response = await fetcherInstance({
        endpoint: '/users',
        fetchingMethod: 'SSR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(MOCK_LIST_USERS.length)
      }
    } catch (error) {
      console.log(error)
    }
  })
})
