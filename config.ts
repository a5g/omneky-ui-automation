export default {
  env: process.env.ENVIRONMENT || 'stage',

  dev: {
    baseURL: 'https://reactjs-dev.omneky.com',
    email: '',
    password: '',
  },

  test: {
    baseURL: 'https://reactjs-test.omneky.com',
    email: '',
    password: '',
  },

  stage: {
    baseURL: 'https://reactjs-staging.omneky.com',
    email: '',
    password: '',
  },

  prod: {
    baseURL: 'https://omneky.com',
    email: '',
    password: '',
  },
}
