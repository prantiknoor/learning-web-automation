import pptr from 'puppeteer'
import fs from 'node:fs/promises'


const browser = await pptr.launch()
const page = await browser.newPage()

const htmlString = await fs.readFile('portable-bluetooth-speaker-with-fetch.html', 'utf-8')
await page.setContent(htmlString)

const price = await page.evaluate(() => {
    return document.querySelector('.money').textContent
})

console.log({ price })

browser.close()