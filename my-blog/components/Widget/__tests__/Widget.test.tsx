// Utils
import { cleanup, render, screen } from '@utils/testUtils'

// Mocks data
import { MOCK_WIDGET } from '@constants/__mock__/mockData'

// Components
import Widget, { IWidget } from '..'

describe('Widget component', () => {
  afterEach(cleanup)

  const mockProps: IWidget = MOCK_WIDGET

  it('should render Widget component', () => {
    const { container } = render(<Widget {...mockProps} />)

    expect(container).toMatchSnapshot()

    const title = screen.getByRole('heading', {
      name: /Categories/i,
    })
    expect(title).toHaveTextContent('Categories')
  })

  it('should render correct widget item', () => {
    render(<Widget {...mockProps} />)

    const link = screen.getByRole('link', {
      name: /Python/i,
    })
    const links = screen.getAllByRole('link')

    expect(link).toHaveTextContent('Python')
    expect(links[0].getAttribute('href')).toEqual('/python')
  })
})
