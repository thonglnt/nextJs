module.exports = {
  create: jest.fn(function () {
    return this
  }),
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  isAxiosError: jest.fn(),
}
