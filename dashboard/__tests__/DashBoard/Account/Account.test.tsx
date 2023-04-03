// Utils
import { render } from '@utils/testUtils'

// App
import Account from 'app/(dashboard)/account/page'

describe('Account Page', () => {
  it('should render Account Page', () => {
    const { container } = render(<Account />)

    expect(container).toMatchSnapshot()
  })
})
