import { test as baseTest } from '@playwright/test'
import { BasePage, LoginPage, DashboardPage, NavigationPage } from '../pages'

const fixture = baseTest.extend<{
  basePage: BasePage
  loginPage: LoginPage
  navigationPage: NavigationPage
  dashboardPage: DashboardPage
}>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page))
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page))
  },
})

export const test = fixture
export const expect = fixture.expect
