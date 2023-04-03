// Utils
import { render } from '@utils/testUtils'

// Components
import { LatestOrders } from '..'

describe('Latest Order card components', () => {
  it('should render Latest Order card component', () => {
    const { container } = render(<LatestOrders />)

    expect(container).toMatchSnapshot()
  })
})
