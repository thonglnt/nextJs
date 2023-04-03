import { getDataContent } from '@services/restClient'

jest.mock('contentful', () => ({
  createClient: jest.fn(() => ({
    getEntries: jest.fn(() => {
      const res = {
        items: [],
      }

      return res.items
    }),
  })),
}))

afterEach(() => {
  jest.clearAllMocks()
})

describe('Get data content of Contentful', () => {
  test('getDataContent should return incorrect value', async () => {
    await getDataContent({
      typeContent: 'test',
    })

    // TODO:
    // - expect get success value
    // ISSUE:
    // - Mock return undefine value
  })

  test('getDataContent should return preview mode', async () => {
    await getDataContent({
      typeContent: 'test',
      preview: true,
    })

    // TODO:
    // - expect get success value
    // ISSUE:
    // - Mock return undefine value
  })
})
