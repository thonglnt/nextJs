// Utils
import { render } from '@utils/testUtils'

// App
import CustomerDetail from 'app/(dashboard)/customer/detail/page'

describe('Customer Detail Page', () => {
  it('should render Customer Page', () => {
    const { container } = render(<CustomerDetail />)

    expect(container).toMatchSnapshot()
  })
})
