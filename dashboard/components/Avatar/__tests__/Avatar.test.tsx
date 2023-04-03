// Utils
import { render } from '@utils/testUtils'

// Components
import Avatar, { IAvatar } from '..'

describe('Avatar component', () => {
  const mockNormalProps: IAvatar = {
    type: 'normal',
  }

  const mockLetterProps: IAvatar = {
    type: 'letter',
  }

  const mockBadgeOnProps: IAvatar = {
    type: 'badge',
    status: 'on',
  }

  const mockBadgeOffProps: IAvatar = {
    type: 'badge',
    status: 'off',
  }

  it('should render Avatar component', () => {
    const { container } = render(<Avatar {...mockNormalProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render letter avatar', () => {
    const { container } = render(<Avatar {...mockLetterProps} />)

    expect(container).toBeTruthy()
  })

  it('should render badge status on avatar', () => {
    const { container } = render(<Avatar {...mockBadgeOnProps} />)

    expect(container).toBeTruthy()
  })

  it('should render badge status off avatar', () => {
    const { container } = render(<Avatar {...mockBadgeOffProps} />)

    expect(container).toBeTruthy()
  })
})
