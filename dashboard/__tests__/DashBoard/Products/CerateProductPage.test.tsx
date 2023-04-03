// Utils
import { render } from '@utils/testUtils'

// App
import CreateProductPage from 'app/(dashboard)/products/create/CreateProduct'

describe('Create Products Page', () => {
  it('should render create Products Page component', () => {
    const { container } = render(<CreateProductPage />)

    expect(container).toMatchSnapshot()
  })
})
