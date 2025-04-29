import puppeteer from "puppeteer";

console.time("Done")
const browser = await puppeteer.launch()
const page = (await browser.pages())[0]

await page.setViewport({ height: 1080, width: 1920 })

await page.setRequestInterception(true)
page.on('request', (req) => {
    if (req.url().includes("hubspot") ||
        req.resourceType() === 'image' ||
        req.resourceType() === 'script') req.abort()
    else req.continue()
})

await page.goto("https://www.osano.com")
await page.addStyleTag({
    content: `
    [aria-label="Cookie Consent Banner"], [aria-label="Chat Widget"] {
        display: none !important;
        visibility: none !important;
        opacity: 0 !important;
    }`})
await page.screenshot({ path: "screenshot3.png" })

await browser.close()
console.timeEnd("Done")