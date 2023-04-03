// Utils
import { MOCK_DATA_CUSTOMERS } from '@constants/mockData'
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import TableCheckbox, { ITableCheckbox } from '..'

describe('Checkbox Table component', () => {
  const mockProps: ITableCheckbox = {
    rows: MOCK_DATA_CUSTOMERS,
  }

  it('should render Checkbox Table component', () => {
    const { container } = render(<TableCheckbox {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should active cell after click button checkbox', () => {
    const { container } = render(<TableCheckbox {...mockProps} />)

    const checkbox = container.querySelectorAll(
      "input[type='checkbox']",
    )[0] as HTMLInputElement
    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })

  it('should render next page after click button next page on table', () => {
    render(<TableCheckbox {...mockProps} />)

    const button = screen.getByRole('button', {
      name: /go to next page/i,
    })

    fireEvent.click(button)

    const viewPagination = screen.getByText(/6–10 of 10/i)

    expect(viewPagination).toBeInTheDocument()
  })
})
