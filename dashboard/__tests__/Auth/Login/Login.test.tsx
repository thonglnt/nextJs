// Utils
import { render } from '@utils/testUtils'

// App
import Login from 'app/(auth)/login/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Login Page', () => {
  it('should render Login Page', () => {
    const { container } = render(<Login />)

    expect(container).toMatchSnapshot()
  })
})
