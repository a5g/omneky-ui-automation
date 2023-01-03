import { test } from '../../fixtures/auto.test'

test.describe('Omneky tests', () => {
  test.skip('should logout', async ({ basePage, page }) => {
    await basePage.load()
    await basePage.logout()
    await page.waitForTimeout(2000)
  })
})
