const test = require('../src/fixtures/common-fixture')
const { expect } = require('@playwright/test')
const HomePage = require('../src/pages/home-page')

test.describe('Find mouses @mouse', () => {
const product = 'mouse'

    test(`Full List should be return only ${product} @success` , async({ page }) => {       
        const homePage = new HomePage(page)
        await homePage.findProduct(product)
        
        const results = await page.$$eval('h2', el => el.map( m => m.innerText.toLowerCase()))
        await results.forEach(el => {
            expect(el).toContain(product)
        })
    })


    test(`Fail test @fail`, async({ page }) => {       
        expect(page).toEqual(2)
    })
})
