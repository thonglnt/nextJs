// Utils
import { render } from '@utils/testUtils'

// Components
import SwitchLabels, { ISwitchLabels } from '..'

describe('Switch component', () => {
  const mockProps: ISwitchLabels = {
    label: 'Switch',
    defaultChecked: true,
  }

  it('should render Switch component', () => {
    const { container } = render(<SwitchLabels {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})
