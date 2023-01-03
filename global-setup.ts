// global-setup.ts
import { chromium } from '@playwright/test'
import { LoginPage } from './pages'
import state from './state.json'

async function globalSetup() {
  if (state.cookies && state.cookies.length === 0) {
    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage()
    const loginPage = new LoginPage(page)

    await loginPage.load()
    await loginPage.login()
    await browser.close()
  }
}

export default globalSetup
