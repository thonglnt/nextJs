// Utils
import { render, fireEvent, screen } from '@utils/testUtils'
import Search from '..'

// Components

describe('Search component', () => {
  const props = {
    isOpen: true,
    onClose: jest.fn(),
    onChange: jest.fn(),
    onKeyDown: jest.fn(),
  }

  it('should render Search', () => {
    const { container } = render(<Search {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should call onChange Search ', () => {
    render(<Search {...props} />)

    const search = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })

    expect(props.onChange).toHaveBeenCalled()
    expect(search.value).toBe('Search Value')
  })

  it('should call onKeyDown after Enter ', () => {
    render(<Search {...props} />)

    const search = screen.getByRole('textbox')
    fireEvent.keyDown(search)

    expect(props.onKeyDown).toHaveBeenCalled()
  })

  it('should call onClose after click icon close ', () => {
    render(<Search {...props} />)

    const closeIcon = screen.getByTestId('close-icon')
    fireEvent.click(closeIcon)

    expect(props.onClose).toHaveBeenCalled()
  })

  it('should call onClose after click icon close ', () => {
    render(<Search {...props} />)

    const backdrop = screen.getByTestId('backdrop')
    fireEvent.click(backdrop)

    expect(props.onClose).toHaveBeenCalled()
  })

  it('do not render modal when it is not open', async () => {
    render(<Search {...props} isOpen={false} />)

    const content = screen.queryByTestId('content')
    expect(content).not.toBeTruthy()
  })
})
