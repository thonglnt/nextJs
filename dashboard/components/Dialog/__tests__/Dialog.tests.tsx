// Utils
import { render } from '@utils/testUtils'

// Components
import AlertDialog, { IAlertDialog } from '..'

describe('Dialog component', () => {
  const mockProps: IAlertDialog = {
    isOpen: true,
    onClose: jest.fn(),
    title: 'Dialog Title',
    content: 'DiaLog Content',
    cancelTitle: 'Cancel',
    confirmTitle: 'Submit',
  }

  it('should render Dialog component', () => {
    const { container } = render(<AlertDialog {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})
