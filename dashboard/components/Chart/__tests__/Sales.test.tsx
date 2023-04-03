// Utils
import { render } from '@utils/testUtils'

// Components
import { Sales } from '../Sales'

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
}))

describe('Sales chart components', () => {
  it('should render Sales chart component', () => {
    const { container } = render(<Sales />)

    expect(container).toMatchSnapshot()
  })
})
