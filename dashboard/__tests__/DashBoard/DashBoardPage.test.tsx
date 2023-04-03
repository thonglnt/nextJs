// Context
import { AuthContext } from '@contexts/AuthProvider'

// Utils
import { render } from '@utils/testUtils'

// App
import HomePage from 'app/(dashboard)/HomePage'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Home Page Page', () => {
  it('should render Home Page Page', () => {
    const value = {
      userId: '1',
      setUserId: jest.fn(),
    }

    const { container } = render(
      <AuthContext.Provider value={value}>
        <HomePage />
      </AuthContext.Provider>,
    )

    expect(container).toMatchSnapshot()
  })
})
