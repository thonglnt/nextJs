// Utils
import { render } from '@utils/testUtils'

// App
import CustomerPage from 'app/(dashboard)/customer/CustomerPage'

describe('Customer Page', () => {
  it('should render Customer Page component', () => {
    const { container } = render(<CustomerPage />)

    expect(container).toMatchSnapshot()
  })
})
