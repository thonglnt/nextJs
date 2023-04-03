// Utils
import { render } from '@utils/testUtils'

// App
import RootLayout from 'app/(auth)/layout'

describe('RootLayout', () => {
  it('should render RootLayout', () => {
    const { container } = render(<RootLayout>Content Pages</RootLayout>)

    expect(container).toMatchSnapshot()
  })
})
