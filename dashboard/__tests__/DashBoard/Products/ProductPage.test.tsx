// Utils
import { render } from '@utils/testUtils'

// App
import ProductsPage from 'app/(dashboard)/products/ProductsPage'

describe('Products Page', () => {
  it('should render Products Page component', () => {
    const { container } = render(<ProductsPage />)

    expect(container).toMatchSnapshot()
  })
})
