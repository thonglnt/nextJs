// Utils
import { render } from '@utils/testUtils'

// App
import Register from 'app/(auth)/register/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Register Page', () => {
  it('should render Register Page', () => {
    const { container } = render(<Register />)

    expect(container).toMatchSnapshot()
  })
})
