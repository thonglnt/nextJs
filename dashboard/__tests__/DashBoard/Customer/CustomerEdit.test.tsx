// Utils
import { render } from '@utils/testUtils'

// App
import EditCustomer from 'app/(dashboard)/customer/edit/page'

describe('Edit Customer Page', () => {
  it('should render Edit Customer Page', () => {
    const { container } = render(<EditCustomer />)

    expect(container).toMatchSnapshot()
  })
})
