import puppeteer from "puppeteer";

console.time("Done")
const browser = await puppeteer.launch()
const page = (await browser.pages())[0]

await page.setViewport({ height: 1080, width: 1920 })
// await page.goto("https://www.cookieconsent.io/")
await page.goto("https://www.cookiebot.com/en/cookie-consent/")
// await page.addStyleTag({
//     content: `
//     .cookie-consent-shadow-bg {
//         display: none !important;
//         visibility: none !important;
//         opacity: 0 !important;
//     }`})
await page.addStyleTag({
    content: `
    #CybotCookiebotDialog {
        display: none !important;
        visibility: none !important;
        opacity: 0 !important;
    }`})
// await page.screenshot({ path: "screenshot.png" })
await page.screenshot({ path: "screenshot2.png" })

await browser.close()
console.timeEnd("Done")