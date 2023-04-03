// Utils
import { render, screen, fireEvent } from '@utils/testUtils'

// Components
import InputFields, { IInputFields } from '..'

describe('Input component', () => {
  const mockProps: IInputFields = {
    label: 'Input Label',
    name: 'input',
  }

  const mockErrorProps: IInputFields = {
    label: 'Input Label',
    name: 'input',
    errorMsg: 'error',
  }

  it('should render Input component', () => {
    const { container } = render(<InputFields {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render error message', () => {
    const { container } = render(<InputFields {...mockErrorProps} />)

    expect(container).toHaveTextContent('Input Label')
    expect(container).toHaveTextContent('error')
  })

  it('should close Alert after click button close', () => {
    render(<InputFields {...mockProps} />)

    const textFields = screen.getByRole('textbox')

    fireEvent.change(textFields, {
      target: { value: 'Value' },
    })

    expect(textFields).toHaveValue('Value')
  })
})
