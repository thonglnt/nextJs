// Utils
import { render } from '@utils/testUtils'

// Components
import { TrafficByDevice } from '../TrafficDevice'

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
}))

describe('Traffic by devices chart components', () => {
  it('should render Traffic by devices chart component', () => {
    const { container } = render(<TrafficByDevice />)

    expect(container).toMatchSnapshot()
  })
})
