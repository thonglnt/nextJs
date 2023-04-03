// Utils
import { render } from '@utils/testUtils'

// Components
import Logo from '..'

describe('Logo component', () => {
  it('should render Logo component', () => {
    const { container } = render(<Logo />)

    expect(container).toMatchSnapshot()
  })
})
