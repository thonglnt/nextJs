// Utils
import { MOCK_SIDEBAR } from '@constants/mockData'
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import SideBar, { ISidebar } from '..'

describe('SideBar component', () => {
  it('should render SideBar component', () => {
    const { container } = render(
      <SideBar menuSidebar={MOCK_SIDEBAR as ISidebar[]} />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should toggle submenu after click button', () => {
    render(<SideBar menuSidebar={MOCK_SIDEBAR as ISidebar[]} />)

    const buttonMenuItem = screen.getByRole('menuitem', {
      name: /customers/i,
    })

    fireEvent.click(buttonMenuItem)
    const menu = screen.getByRole('menu')

    expect(menu).toBeInTheDocument()
  })
})
