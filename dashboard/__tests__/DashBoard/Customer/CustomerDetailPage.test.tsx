// Utils
import { render } from '@utils/testUtils'

// App
import DetailCustomerPage from 'app/(dashboard)/customer/detail/DetailCustomer'

describe('Detail Customer Page', () => {
  it('should render Detail Customer Page component', () => {
    const { container } = render(<DetailCustomerPage />)

    expect(container).toMatchSnapshot()
  })
})
