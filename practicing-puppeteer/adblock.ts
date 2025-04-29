import puppeteer from "puppeteer";
import { PuppeteerBlocker } from '@ghostery/adblocker-puppeteer';
import { setTimeout } from "node:timers/promises";

console.time("Done")
const browser = await puppeteer.launch()
const page = (await browser.pages())[0]

await page.setViewport({ height: 1080, width: 1920 })

const blocker = await PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch)
// const blocker = await PuppeteerBlocker.fromLists(fetch, [
//     'https://easylist.to/easylist/easylist.txt',
//     'https://fanboy.co.nz/fanboy-cookiemonster.txt',
//     'https://raw.githubusercontent.com/laylavish/uBlockOrigin-HUGE-AI-Blocklist/main/noai_hosts.txt'
// ])
await blocker.enableBlockingInPage(page)

await page.goto("https://adblock-tester.com/")
// await page.goto("https://www.cookieyes.com/product/cookie-consent/")
await page.screenshot({ path: "screenshot4.png" })

await browser.close()
console.timeEnd("Done")