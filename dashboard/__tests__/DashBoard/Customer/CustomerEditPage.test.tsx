// Utils
import { render } from '@utils/testUtils'

// App
import EditCustomerPage from 'app/(dashboard)/customer/edit/EditCustomer'

describe('Edit Customer Page', () => {
  it('should render Edit Customer Page component', () => {
    const { container } = render(<EditCustomerPage />)

    expect(container).toMatchSnapshot()
  })
})
