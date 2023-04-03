// Utils
import { render } from '@utils/testUtils'

// App
import Customer from 'app/(dashboard)/customer/page'

describe('Customer Page', () => {
  it('should render Customer Page', () => {
    const { container } = render(<Customer />)

    expect(container).toMatchSnapshot()
  })
})
