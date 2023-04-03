// Utils
import { render } from '@utils/testUtils'

// Components
import Selects, { ISelects } from '..'

describe('Selects component', () => {
  const mockProps: ISelects = {
    options: [
      {
        value: 1,
        title: 'category 1',
      },
      {
        value: 2,
        title: 'category 2',
      },
      {
        value: 3,
        title: 'category 3',
      },
      {
        value: 4,
        title: 'category 4',
      },
    ],
    label: 'Category',
    helperText: 'helper text',
  }

  it('should render Switch component', () => {
    const { container } = render(<Selects {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})
