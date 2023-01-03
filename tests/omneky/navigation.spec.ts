import { test } from '../../fixtures/auto.test'

test.describe('Omneky tests => Navigation (Menu clicks)', () => {
  test('@P0 should load Generate page using menu click', async ({
    basePage,
  }) => {
    await basePage.gotoGenerate()
  })

  test('@P0 should load Library page using menu click', async ({
    basePage,
  }) => {
    await basePage.gotoLibrary()
  })
})

test.describe('Omneky tests => Navigation (direct URL loading)', () => {
  test('@P1 should load Generate page using direct url', async ({
    navigationPage,
  }) => {
    await navigationPage.loadGenerate()
  })

  test('@P1 @FAIL should load Library page using direct url', async ({
    navigationPage,
  }) => {
    await navigationPage.loadLibrary()
  })
})
