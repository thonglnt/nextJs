// Utils
import { render } from '@utils/testUtils'

// App
import RegisterPage from 'app/(auth)/register/RegisterPage'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Login Page', () => {
  it('should render Login Page', () => {
    const { container } = render(<RegisterPage />)

    expect(container).toMatchSnapshot()
  })
})
