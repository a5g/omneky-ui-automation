import { test, expect } from '../../fixtures/auto.test'

test.describe('Omneky tests => AB Test', () => {
  // baseline
  // const client: string = 'Omneky'
  // test.beforeEach(async ({ page }) => {
  //   await page.route('**/api/v1/account_summary', (route) => {
  //     route.fulfill({
  //       path: 'data/account_summary/omneky.json',
  //     })
  //   })
  // })

  // compare
  const client: string = 'Mia Melon'

  test('@AB shoud fail as it verfies two different clients', async ({
    dashboardPage,
    page,
  }) => {
    await dashboardPage.load()
    await dashboardPage.selectClientByScrolling(client)

    expect(await page.screenshot()).toMatchSnapshot({
      name: 'statistic-page.png',
      threshold: 0.3,
    })
  })
})
