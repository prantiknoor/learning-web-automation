import pptr from 'puppeteer'

const browser = await pptr.connect({
    // browserURL: 'http://localhost:3000'
    // browserWSEndpoint: 'ws://127.0.0.1:3000/devtools/browser/7edb8fb8-6927-4d80-9634-9606057c457f'
    browserWSEndpoint: 'ws://localhost:3000'
})

console.log(await browser.version())

const page = await browser.newPage()
await page.goto("https://example.com")

const title = await page.title()
console.log(title)

