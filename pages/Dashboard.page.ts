import { Page } from '@playwright/test'
import BasePage from './Base.page'

export default class DashboardPage extends BasePage {
  page: Page

  constructor(page: Page) {
    super(page)
    this.page = page
  }

  public async load() {
    await super.load('/dashboard')
    await super.waitForHomePage()
  }

  public async getStatisticContent(attr: string) {
    const parentLocator = this.page.getByText(attr).locator('..')
    const text = await parentLocator
      .locator('span.ant-statistic-content-value')
      .innerText()

    return { int: text.split('.')[0], decimal: text.split('.')[1] }
  }
}
