import { test } from '../../fixtures/auto.test'

test.describe('Omneky tests', () => {
  test.skip('@P0 should login', async ({ loginPage }) => {
    await loginPage.load()
    await loginPage.login()
  })
})
