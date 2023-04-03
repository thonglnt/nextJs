import React from 'react'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// App
import AccountPage from 'app/(dashboard)/account/AccountPage'

describe('Account Page', () => {
  it('should render Account Page Component', () => {
    const { container } = render(<AccountPage />)

    const button = screen.getByRole('button', {
      name: /general/i,
    })

    fireEvent.click(button)
    expect(container).toMatchSnapshot()
  })

  it('should render Billing Account Page Component', () => {
    const { container } = render(<AccountPage />)

    const button = screen.getByRole('button', {
      name: /billing/i,
    })

    fireEvent.click(button)

    expect(container).toBeInTheDocument()
  })

  it('should render Security Account Page Component', () => {
    const { container } = render(<AccountPage />)

    const button = screen.getByRole('button', {
      name: /security/i,
    })

    fireEvent.click(button)

    expect(container).toBeInTheDocument()
  })
})
