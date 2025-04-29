import { setTimeout } from "node:timers/promises"
import { faker } from "@faker-js/faker"
import puppeteer from "puppeteer"

async function main() {
    console.time("Done")
    const browser = await puppeteer.launch({
        executablePath: "/usr/bin/google-chrome",
        headless: false
    })
    const page = (await browser.pages())[0]

    /*  await page.goto("https://monkeytype.com/", { waitUntil: "load" })
    
        await page.click(".acceptAll")
        await setTimeout(1000)
    
        await page.evaluate(() => {
            document.querySelector("button[mode='words']").click()
            document.querySelector("button[wordcount='custom']").click()
            // document.querySelector("#customWordAmountModal input").value = 100
            // document.querySelector("#customWordAmountModal button").click()
        })
        await setTimeout(200)
        await page.type("#customWordAmountModal input", "100")
        await page.keyboard.press("Enter")
        await setTimeout(500)
        
        const textToType = await page.evaluate(() => [...document.querySelectorAll('.word')].map(el => el.textContent).join(" "))
        const textToType = (await page.$$eval(".word", els => els.map(el => el.textContent))).join(" ")
    
        await page.type("#words", textToType, { delay: 50 })
        await setTimeout(500)
    
        const speed = await page.$eval(".bottom", (el) => el.getAttribute("aria-label"));
    
        console.log("Speed:", speed);
    
    
        await page.keyboard.down("a")
        await page.keyboard.up("a")
    
        const linkEl = await page.waitForSelector("a", { timeout: 10_000 })
        await linkEl?.click()
    
        await page.waitForNetworkIdle()
    */

    // const getInnerText = (selector) => document.querySelector(selector)?.innerText;
    // console.log(await page.evaluateOnNewDocument(() => document.querySelector('h1').innerText = "Hello World"));

    // await page.setRequestInterception(true)

    await page.goto("https://www.iana.org/help/example-domains")

    const logoReq = await page.waitForResponse(req => req.url().includes("logo"))
    await logoReq?.ok()
    // await page.exposeFunction('md5', (text) =>
    //     require('crypto').createHash("md5").update(text).digest('hex')
    // )
    // await page.exposeFunction('randomName', () => {
    //     return faker.internet.username()
    // })

    // await page.evaluate(async () => {
    //     // const linkText = document.querySelector('a')?.innerText
    //     // const hash = await window.md5(linkText)
    //     // document.querySelector('h1').innerText = hash
    //     document.querySelector('h1').innerText = await window.randomName()
    // })

    // await page.addStyleTag({ content: "html { background: red }" })

    // const linkText = await page.evaluate(getInnerText, 'h1');
    // const hash = require('node:crypto').createHash("md5").update(linkText).digest('hex');

    // await page.evaluate((hash) => document.querySelector('h1').innerText = hash, hash)

    // await browser.close()
    console.timeEnd("Done")
}

main()