// Utils
import { render } from '@utils/testUtils'

// Mocks data
import { MOCK_DATA_CARD_POST } from '@constants/__mock__/mockData'

// Components
import CardPost, { ICardPost } from '..'

describe('Logo Component', () => {
  const mockProps: ICardPost = MOCK_DATA_CARD_POST

  it('Should show match Logo DOM Snapshot', () => {
    const { container } = render(<CardPost {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})
