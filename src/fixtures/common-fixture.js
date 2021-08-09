const base = require('@playwright/test')

const test = base.test.extend({
  page: async ({ page, baseURL }, use) => {
    await page.goto(baseURL)
    await use(page)
  },
  
})

module.exports = test