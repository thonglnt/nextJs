// Utils
import { render, screen } from '@utils/testUtils'

// Components
import CardActions, { ICardActions } from '..'

describe('Card Actions component', () => {
  const mockProps: ICardActions = {
    title: 'Learn more',
    href: '/learn-more',
  }

  it('should render Card Actions component', () => {
    const { container } = render(<CardActions {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render match content Card Actions component', () => {
    render(<CardActions {...mockProps} />)

    const contentCardActions = screen.getByText(/Learn more/i)
    expect(contentCardActions).toHaveTextContent('Learn more')
  })
})
