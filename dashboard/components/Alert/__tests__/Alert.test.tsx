// Utils
import { render, screen, fireEvent } from '@utils/testUtils'

// Components
import Alert, { IAlert } from '..'

describe('Alert component', () => {
  const mockProps: IAlert = {
    children: 'This is an success alert — check it out!',
    isOpen: true,
    severity: 'success',
    alertTitle: 'Success',
  }

  it('should render Alert component', () => {
    const { container } = render(<Alert {...mockProps} />)

    expect(container).toMatchSnapshot()

    const view = screen.getByText(/this is an success alert — check it out!/i)

    expect(view).toHaveTextContent(
      'SuccessThis is an success alert — check it out!',
    )
  })

  it('should close Alert after click button close', () => {
    const { container } = render(<Alert {...mockProps} />)

    const buttonClose = screen.getByTestId('close')
    fireEvent.click(buttonClose)

    expect(container).not.toHaveTextContent(
      'this is an success alert — check it out!',
    )
  })
})
