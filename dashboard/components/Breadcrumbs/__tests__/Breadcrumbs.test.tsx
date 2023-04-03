// Utils
import { render, screen } from '@utils/testUtils'

// Components
import BasicBreadcrumbs, { IBreadcrumbs } from '..'

describe('Breadcrumbs component', () => {
  const mockProps: IBreadcrumbs = {
    title: 'Products',
  }

  it('should render Breadcrumb component', () => {
    const { container } = render(<BasicBreadcrumbs {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render match content Breadcrumb component', () => {
    render(<BasicBreadcrumbs {...mockProps} />)

    const dashBoard = screen.getByText(/Dashboard/i)
    const management = screen.getByText(/Management/i)
    const products = screen.getByText(/Products/i)

    expect(dashBoard).toHaveTextContent('Dashboard')
    expect(management).toHaveTextContent('Management')
    expect(products).toHaveTextContent('Products')
  })
})
