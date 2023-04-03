// Utils
import { render } from '@utils/testUtils'

// App
import RootLayout from 'app/(dashboard)/layout'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('RootLayout', () => {
  it('should render RootLayout', () => {
    const { container } = render(<RootLayout>Content Pages</RootLayout>)

    expect(container).toMatchSnapshot()
  })
})
