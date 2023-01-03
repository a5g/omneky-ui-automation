import { Page, expect } from '@playwright/test'
import fs from 'fs'
import cnfg from '../config'

export default class BasePage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  public get config() {
    return cnfg[cnfg.env]
  }

  public async load(path: string = '/') {
    await this.page.goto(`${this.config.baseURL}${path}`)
  }

  // prettier-ignore
  public get virtualListHolder() { return this.page
      .locator('div.rc-virtual-list-holder') }

  public async removeSession(filePath: string = 'state.json') {
    fs.writeFile(
      filePath,
      JSON.stringify({ cookies: [] }, null, 2),
      function (err) {
        if (err) return console.log(err)
        // console.log('Hello World > helloworld.txt')
      },
    )
  }

  public async storeSession(filePath: string = 'state.json') {
    await this.page.context().storageState({ path: filePath })
  }

  public async logout() {
    await this.page.locator('a').filter({ hasText: 'Adcreator' }).hover()
    await this.page.waitForTimeout(2000)
    await this.page.getByText('Logout').click()
    await this.page.getByLabel('Email').waitFor()
    await this.removeSession()
  }

  public async selectClientByScrolling(client: string) {
    let flag = true

    await this.page.locator('header div.ant-select-show-arrow').click()

    while (flag) {
      await this.virtualListHolder.evaluate((element) =>
        element.scrollBy(0, 200),
      )
      await this.page.waitForTimeout(50)

      const list: string[] = (await this.virtualListHolder.innerText()).split(
        '\n',
      )

      if (list.indexOf(client) > -1) {
        flag = false
        await this.page.getByText(client).click()
        await this.page.locator(`header [title="${client}"]`).waitFor()
        await this.waitForLoaderToHide()
      }
    }
  }

  public async selectClientByEnteringText(client: string) {
    await this.page.locator('[id=rc_select_0]').fill(client)
    await this.page.getByText(client).click()
    await this.waitForLoaderToHide()
  }

  public async waitForLoaderToHide() {
    await this.page.waitForTimeout(500)
    await this.page
      .locator('div.ant-message-notice-loading')
      .waitFor({ state: 'hidden' })
  }

  public async waitForHomePage() {
    await this.waitForLoaderToHide()
    await this.page.locator('a').filter({ hasText: 'Adcreator' }).waitFor()
  }

  public getSelectedMenu() {
    return this.page.locator('li.ant-menu-item-selected').innerText()
  }

  public async checkGeneratePage() {
    await this.page.getByText('Enter image description:').waitFor()
    expect(await this.getSelectedMenu()).toEqual('Generate')
    await this.page.waitForTimeout(2500)
  }

  public async checkLibraryPage() {
    await this.page.getByText('recent uploads').nth(0).waitFor()
    expect(await this.getSelectedMenu()).toEqual('Library')
    await this.page.waitForTimeout(2500)
  }

  public async gotoGenerate() {
    await this.load()
    await this.page.locator('a').filter({ hasText: 'Generate' }).click()
    await this.checkGeneratePage()
  }

  public async gotoLibrary() {
    await this.load()
    await this.page.locator('a').filter({ hasText: 'Library' }).click()
    await this.checkLibraryPage()
  }
}
