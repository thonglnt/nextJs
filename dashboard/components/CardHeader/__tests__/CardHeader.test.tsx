// Utils
import { render, screen } from '@utils/testUtils'

// Components
import CardHeader, { ICardHeader } from '..'

describe('Card Header component', () => {
  const mockProps: ICardHeader = {
    title: 'Learn more',
    desc: 'description',
    actions: true,
  }

  it('should render Card Header component', () => {
    const { container } = render(<CardHeader {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render match content Card Header component', () => {
    render(<CardHeader {...mockProps} />)

    const contentCardHeader = screen.getByText(/Learn more/i)
    const descCardHeader = screen.getByText(/description/i)

    expect(contentCardHeader).toHaveTextContent('Learn more')
    expect(descCardHeader).toHaveTextContent('description')
  })
})
