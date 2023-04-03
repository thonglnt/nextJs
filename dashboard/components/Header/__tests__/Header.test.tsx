// Utils
import { fireEvent, render, screen } from '@utils/testUtils'
import { useRouter } from 'next/navigation'

// Components
import Header from '..'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Header component', () => {
  it('should render Header component', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  it('should render popup search after click button search and close after click button close ', () => {
    render(<Header />)

    const buttonSearch = screen.getByTestId('SearchIcon')

    fireEvent.click(buttonSearch)

    const modalSearch = screen.getByTestId('modalSearch')

    expect(modalSearch).toBeInTheDocument()

    const closeButton = screen.getByTestId('CloseIcon')

    fireEvent.click(closeButton)
  })

  it('should render popup contacts after click button contact and close after click again button contact ', () => {
    render(<Header />)

    const buttonContact = screen.getByTestId('GroupIcon')

    fireEvent.click(buttonContact)

    const popupContact = screen.getByText(/contacts/i)

    expect(popupContact).toBeInTheDocument()

    fireEvent.click(buttonContact)
  })

  it('should render popup notification after click button notification and close after click again button notification ', () => {
    render(<Header />)

    const buttonNotifications = screen.getByTestId('NotificationsIcon')

    fireEvent.click(buttonNotifications)

    const popupNotification = screen.getByRole('menu')

    expect(popupNotification).toBeInTheDocument()

    fireEvent.click(buttonNotifications)
  })

  it('should render popup user after click button user and logout user after click logout ', () => {
    const push = jest.fn()

    ;(useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }))

    render(<Header />)

    const buttonUsers = screen.getByTestId('PersonIcon')

    fireEvent.click(buttonUsers)

    const popupUser = screen.getByRole('menu')

    expect(popupUser).toBeInTheDocument()

    const buttonLogout = screen.getByRole('menuitem', {
      name: /logout/i,
    })

    fireEvent.click(buttonLogout)
    expect(push).toHaveBeenCalledWith('/login')
  })
})
