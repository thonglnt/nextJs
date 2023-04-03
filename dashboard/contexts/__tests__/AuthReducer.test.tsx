import AuthReducer, { USER_ACTION } from '@contexts/AuthReducer'

describe('AuthReducer', () => {
  const mocksUser = {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY2NTk4MTIxMSwiZXhwIjoxNjY1OTg0ODExLCJzdWIiOiJzeXRXU3JhIn0.DzvQxWQXMr6al_2HeDBajZfOsP6qYgmFEWxKmvpgMoQ',
    user: {
      email: 'John123@gmail.com',
      name: 'John',
      avatar: 'avatar',
      id: 'sytWSratc',
    },
  }

  it('AuthReducer action set user', () => {
    const setUser = AuthReducer(null, {
      type: USER_ACTION.SET_USER,
      userSession: mocksUser,
    })

    expect(setUser).toEqual(mocksUser)
  })

  it('AuthReducer action logout', () => {
    const logoutUser = AuthReducer(mocksUser, {
      type: USER_ACTION.LOGOUT,
    })

    expect(logoutUser).toEqual(null)
  })
})
