import { Page } from '@playwright/test'
import BasePage from './Base.page'

export default class LoginPage extends BasePage {
  page: Page

  constructor(page: Page) {
    super(page)
    this.page = page
  }

  public async load() {
    await super.load('/login')
  }

  public async login(
    email: string = super.config.email,
    password: string = super.config.password,
  ) {
    await this.page.getByLabel('Email').fill(email)
    await this.page.getByLabel('Password').fill(password)
    await this.page.getByRole('button', { name: 'Sign In' }).click()
    await this.page.waitForTimeout(500)
    await super.waitForLoaderToHide()
    await this.page.locator('a').filter({ hasText: 'Adcreator' }).waitFor()
    await this.storeSession()
  }
}
