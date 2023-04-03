// Utils
import { MOCK_DATA_PRODUCTS } from '@constants/mockData'
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import CollapsibleTable, { ICollapsibleTable, IRow } from '..'

describe('Collapsible Table component', () => {
  const mockProps: ICollapsibleTable = {
    rows: MOCK_DATA_PRODUCTS as IRow[],
  }

  it('should render Collapsible Table component', () => {
    const { container } = render(<CollapsibleTable {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render next page after click button next page on table', () => {
    render(<CollapsibleTable {...mockProps} />)

    const button = screen.getByRole('button', {
      name: /go to next page/i,
    })

    fireEvent.click(button)

    const viewPagination = screen.getByText(/6–10 of 10/i)

    expect(viewPagination).toBeInTheDocument()
  })
})
