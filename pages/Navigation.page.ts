import { Page } from '@playwright/test'
import BasePage from './Base.page'

export default class NavigationPage extends BasePage {
  page: Page

  constructor(page: Page) {
    super(page)
    this.page = page
  }

  public async load() {
    await super.load('/')
  }

  public async loadGenerate() {
    await super.load('/generate')
    await super.checkGeneratePage()
  }

  public async loadLibrary() {
    await super.load('/library/recent_uploads')
    await super.checkLibraryPage()
  }
}
