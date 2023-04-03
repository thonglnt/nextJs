import { memo, MouseEvent, ReactNode, useState } from 'react'
import { IconButton, Menu, MenuProps } from '@mui/material'

export interface IMenuComposition extends MenuProps {
  element: ReactNode | string
  children: ReactNode
  horizontal?: 'center' | 'left' | 'right'
}

const MenuComposition = ({
  element,
  children,
  horizontal = 'center',
}: IMenuComposition) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-controls={open ? 'menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        size="small"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {element}
      </IconButton>
      <Menu
        data-testid="menu"
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal, vertical: 'top' }}
        anchorOrigin={{ horizontal, vertical: 'bottom' }}
      >
        {children}
      </Menu>
    </>
  )
}

export default memo(MenuComposition)
