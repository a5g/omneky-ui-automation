import { test, expect } from '../../fixtures/auto.test'
import omnekyData from '../../data/account_summary/omneky.json'
import miaMelonData from '../../data/account_summary/miaMelon.json'
import { utils } from '../../utils/utils'

test.describe('Omneky tests => Dashboard (Omneky)', () => {
  const client: string = 'Omneky'

  test.beforeEach(async ({ page, dashboardPage }) => {
    await page.route('**/api/v1/account_summary', (route) => {
      route.fulfill({
        path: 'data/account_summary/omneky.json',
      })
    })

    await dashboardPage.load()
  })

  test('@P0 @P1 shoud load data by entering the client', async ({
    dashboardPage,
  }) => {
    await dashboardPage.selectClientByEnteringText(client)

    const spend = await dashboardPage.getStatisticContent('Spend')
    const impressions = await dashboardPage.getStatisticContent('Impressions')
    const clicks = await dashboardPage.getStatisticContent('Clicks')
    const leads = await dashboardPage.getStatisticContent('Leads')

    expect(spend.int).toEqual(utils.getAttributeInt(omnekyData.data, 'spend'))
    expect(impressions.int).toEqual(
      utils.getAttributeInt(omnekyData.data, 'impressions'),
    )
    expect(clicks.int).toEqual(utils.getAttributeInt(omnekyData.data, 'clicks'))
    expect(leads.int).toEqual(utils.getAttributeInt(omnekyData.data, 'leads'))
  })

  test('@P1 shoud load data by selecting the client (scrolling way)', async ({
    dashboardPage,
  }) => {
    await dashboardPage.selectClientByScrolling(client)

    const spend = await dashboardPage.getStatisticContent('Spend')
    const impressions = await dashboardPage.getStatisticContent('Impressions')
    const clicks = await dashboardPage.getStatisticContent('Clicks')
    const leads = await dashboardPage.getStatisticContent('Leads')

    expect(spend.int).toEqual(utils.getAttributeInt(omnekyData.data, 'spend'))
    expect(impressions.int).toEqual(
      utils.getAttributeInt(omnekyData.data, 'impressions'),
    )
    expect(clicks.int).toEqual(utils.getAttributeInt(omnekyData.data, 'clicks'))
    expect(leads.int).toEqual(utils.getAttributeInt(omnekyData.data, 'leads'))
  })
})

test.describe('Omneky tests => Dashboard (Mia Melon)', () => {
  const client: string = 'Mia Melon'

  test.beforeEach(async ({ page, dashboardPage }) => {
    await page.route('**/api/v1/account_summary', (route) => {
      route.fulfill({
        path: 'data/account_summary/miaMelon.json',
      })
    })

    await dashboardPage.load()
  })

  test('@P0 @P1 shoud load data by entering the client', async ({
    dashboardPage,
  }) => {
    await dashboardPage.selectClientByEnteringText(client)

    const spend = await dashboardPage.getStatisticContent('Spend')
    const impressions = await dashboardPage.getStatisticContent('Impressions')
    const clicks = await dashboardPage.getStatisticContent('Clicks')
    const leads = await dashboardPage.getStatisticContent('Leads')

    expect(spend.int).toEqual(utils.getAttributeInt(miaMelonData.data, 'spend'))
    expect(impressions.int).toEqual(
      utils.getAttributeInt(miaMelonData.data, 'impressions'),
    )
    expect(clicks.int).toEqual(
      utils.getAttributeInt(miaMelonData.data, 'clicks'),
    )
    expect(leads.int).toEqual(utils.getAttributeInt(miaMelonData.data, 'leads'))
  })

  test.skip('@P1 @FAIL shoud load data by selecting the client (scrolling way) (force fail test)', async ({
    dashboardPage,
  }) => {
    await dashboardPage.selectClientByScrolling(client)

    const spend = await dashboardPage.getStatisticContent('Spend')
    const impressions = await dashboardPage.getStatisticContent('Impressions')
    const clicks = await dashboardPage.getStatisticContent('Clicks')
    const leads = await dashboardPage.getStatisticContent('Leads')

    expect(spend.int).toEqual(utils.getAttributeInt(miaMelonData.data, 'spend'))
    expect(impressions.int).toEqual(
      utils.getAttributeInt(miaMelonData.data, 'impressions'),
    )
    expect(clicks.int).toEqual(
      utils.getAttributeInt(miaMelonData.data, 'clicks'),
    )
    expect(leads.int).toEqual(utils.getAttributeInt(miaMelonData.data, 'leads'))
    expect(leads.int).toEqual('1955')
  })
})
