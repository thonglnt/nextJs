// Utils
import { render } from '@utils/testUtils'

// Components
import { LatestProducts } from '..'

describe('Latest Products card components', () => {
  it('should render Latest Products card component', () => {
    const { container } = render(<LatestProducts />)

    expect(container).toMatchSnapshot()
  })
})
