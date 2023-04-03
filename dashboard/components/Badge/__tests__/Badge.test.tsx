import MailIcon from '@mui/icons-material/Mail'

// Utils
import { render } from '@utils/testUtils'

// Components
import BadgeVisibility, { IBadge } from '..'

describe('Badge Component', () => {
  const mockProps: IBadge = {
    children: <MailIcon color="action" />,
    content: 9,
    color: 'error',
    invisible: false,
  }

  it('Should show match Badge DOM Snapshot', () => {
    const { container } = render(<BadgeVisibility {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})
