// Utils
import { render } from '@utils/testUtils'

// App
import Products from 'app/(dashboard)/products/page'

describe('Products Page', () => {
  it('should render Products Page component', () => {
    const { container } = render(<Products />)

    expect(container).toMatchSnapshot()
  })
})
