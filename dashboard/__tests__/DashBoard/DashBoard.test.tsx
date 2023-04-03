// Contexts
import { AuthContext } from '@contexts/AuthProvider'

// Utils
import { render } from '@utils/testUtils'

// App
import Dashboard from 'app/(dashboard)/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Dashboard Page', () => {
  it('should render Dashboard Page', () => {
    const value = {
      userId: '1',
      setUserId: jest.fn(),
    }

    const { container } = render(
      <AuthContext.Provider value={value}>
        <Dashboard />
      </AuthContext.Provider>,
    )

    expect(container).toMatchSnapshot()
  })
})
