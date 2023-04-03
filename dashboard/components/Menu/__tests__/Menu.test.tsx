import { PersonAdd } from '@mui/icons-material'
import { MenuItem, Divider, ListItemIcon, Box } from '@mui/material'

// Utils
import { render, screen, fireEvent } from '@utils/testUtils'

// Components
import Avatar from '@components/Avatar'
import MenuComposition, { IMenuComposition } from '..'

describe('Menu component', () => {
  const mockProps: IMenuComposition = {
    horizontal: 'center',
    element: <Avatar type="letter">M</Avatar>,
    open: false,
    children: (
      <Box>
        <MenuItem>
          <Avatar type="normal" /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar type="normal" /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
      </Box>
    ),
  }

  it('should render Menu component', () => {
    const { container } = render(<MenuComposition {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('Should call onClick on Menu and open Menu', () => {
    render(<MenuComposition {...mockProps} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  it('Should call onClick on Menu and close Menu', () => {
    const { container } = render(<MenuComposition {...mockProps} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)
    const menu = screen.getByTestId('menu')
    fireEvent.click(menu)

    expect(container).not.toHaveTextContent('Profile')
  })
})
