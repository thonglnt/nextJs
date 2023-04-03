// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Contexts
import { AuthProvider } from '@contexts/AuthProvider'

// Utils
import { screen, render } from '@utils/testUtils'

const TestingComponent = () => {
  const { userId } = useAuthContext()

  return <h1>{userId}</h1>
}

describe('AuthProvider', () => {
  it('AuthProvider composes correct id', () => {
    const mocksLocalStorage = {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY2NTk4MTIxMSwiZXhwIjoxNjY1OTg0ODExLCJzdWIiOiJzeXRXU3JhIn0.DzvQxWQXMr6al_2HeDBajZfOsP6qYgmFEWxKmvpgMoQ',
      user: {
        email: 'John123@gmail.com',
        firstName: 'John',
        lastName: 'Wick',
        id: 'sytWSratc',
      },
    }

    localStorage.setItem('userId', JSON.stringify('sytWSratc'))

    render(
      <AuthProvider>
        <TestingComponent />
      </AuthProvider>,
    )

    expect(screen.getByRole('heading').textContent).toBe(
      mocksLocalStorage.user.id,
    )
  })
})
