import { Page } from '@playwright/test'
import BasePage from './Base.page'

export default class AnalyzePage extends BasePage {
  page: Page

  constructor(page: Page) {
    super(page)
    this.page = page
  }

  public async load() {
    await super.load('/')
  }
}
