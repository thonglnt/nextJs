import { cleanup, fireEvent, render } from '@utils/testUtils'
import BasicBreadcrumbs, { IBreadcrumbs } from '..'

describe('Breadcrumbs component', () => {
  afterEach(cleanup)

  const mockProps: IBreadcrumbs = {
    links: [
      {
        link: 'Blog',
        href: '/blog',
      },
    ],
  }

  it('should render Breadcrumb component', () => {
    const { getByText } = render(<BasicBreadcrumbs {...mockProps} />)

    expect(getByText).toMatchSnapshot()

    const link = getByText('HOME')
    expect(link).toBeTruthy()

    expect(link).toHaveAttribute('href', '/')
  })

  it('should redirect corresponding url when click on breadcrumb link', () => {
    const { container } = render(<BasicBreadcrumbs {...mockProps} />)

    fireEvent.click(container)

    expect(window.location.href).toBe('http://localhost/')
  })
})
