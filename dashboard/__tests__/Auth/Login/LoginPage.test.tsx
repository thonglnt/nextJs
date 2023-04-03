// Utils
import { MOCK_USERS } from '@constants/mockData'
import { cleanup, render } from '@utils/testUtils'

// App
import LoginPage from 'app/(auth)/login/LoginPage'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Login Page', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_USERS),
    }),
  ) as jest.Mock

  beforeEach(() => {
    cleanup()

    render(<LoginPage />)
  })

  it('should render Login Page', () => {
    const { container } = render(<LoginPage />)

    expect(container).toMatchSnapshot()
  })
})
