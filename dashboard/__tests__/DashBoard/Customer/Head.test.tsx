// Utils
import { render } from '@utils/testUtils'

// App
import Head from 'app/(dashboard)/customer/head'

describe('Head dash board render', () => {
  it('Should Head match Snapshot', () => {
    const { container } = render(<Head />)

    expect(container).toMatchSnapshot()
  })
})
