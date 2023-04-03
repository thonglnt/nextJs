import { render, screen } from '@utils/testUtils'
import Footer from '..'

describe('Footer layouts', () => {
  it('should render Footer layouts', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()

    const contact = screen.getByTestId('contact-detail')
    const copyright = screen.getByTestId('copyright')

    expect(contact).toHaveTextContent('Code your life in an elegant way')
    expect(copyright).toHaveTextContent('© Copyright 2019-2021 by BeautyOnCode')
  })
})
