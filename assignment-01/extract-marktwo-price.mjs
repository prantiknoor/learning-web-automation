import pptr from 'puppeteer'

const browser = await pptr.launch()
const page = await browser.newPage()
await page.goto('https://rt-barberry.myshopify.com/collections/all/products/decorative-alarm-clock', {
    waitUntil: 'domcontentloaded',
})
const price = await page.evaluate(() => {
    return document.querySelector('.money').textContent
})

console.log({ price })

browser.close()