// Utils
import { render } from '@utils/testUtils'

// App
import CreateProduct from 'app/(dashboard)/products/create/page'

describe('Create Products Page', () => {
  it('should render Create Products Page', () => {
    const { container } = render(<CreateProduct />)

    expect(container).toMatchSnapshot()
  })
})
