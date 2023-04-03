// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import RegisterForm from '..'

describe('Register Form component', () => {
  const handleSubmit = jest.fn()
  const props = {
    email: 'thuandang@gmail.com',
    password: '123456789',
  }
  it('should render Register form', () => {
    const { container } = render(
      <RegisterForm
        handleSubmitForm={handleSubmit}
        error={{
          email: '',
          password: '',
        }}
      />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should call onChange input email', () => {
    render(
      <RegisterForm
        handleSubmitForm={handleSubmit}
        error={{
          email: '',
          password: '',
        }}
      />,
    )
    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: { value: props.email },
    })

    expect(input).toHaveValue(props.email)
  })

  it('should call onChange input password', () => {
    render(
      <RegisterForm
        handleSubmitForm={handleSubmit}
        error={{
          email: '',
          password: '',
        }}
      />,
    )
    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: { value: props.password },
    })

    expect(input).toHaveValue(props.password)
  })
})
