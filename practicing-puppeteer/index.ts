import { setTimeout } from "node:timers/promises"
import puppeteer from "puppeteer"

async function main() {
    console.time("Done")
    const browser = await puppeteer.launch({
        executablePath: "/usr/bin/google-chrome",
        headless: false
    })
    const page = (await browser.pages())[0]
    await page.goto("https://monkeytype.com/", { waitUntil: "load" })

    await page.click(".acceptAll")
    await setTimeout(1000)

    // await page.evaluate(() => {
    //     document.querySelector("button[mode='words']").click()
    //     document.querySelector("button[wordcount='custom']").click()
    //     // document.querySelector("#customWordAmountModal input").value = 100
    //     // document.querySelector("#customWordAmountModal button").click()
    // })
    // await setTimeout(200)
    // await page.type("#customWordAmountModal input", "100")
    // await page.keyboard.press("Enter")
    // await setTimeout(500)
    
    // const textToType = await page.evaluate(() => [...document.querySelectorAll('.word')].map(el => el.textContent).join(" "))
    const textToType = (await page.$$eval(".word", els => els.map(el => el.textContent))).join(" ")

    await page.type("#words", textToType, { delay: 50 })
    await setTimeout(500)

    const speed = await page.$eval(".bottom", (el) => el.getAttribute("aria-label"));

    console.log("Speed:", speed);


    // await page.keyboard.down("a")
    // await page.keyboard.up("a")

    // const linkEl = await page.waitForSelector("a", { timeout: 10_000 })
    // await linkEl?.click()

    // await page.waitForNetworkIdle()

    await browser.close()
    console.timeEnd("Done")
}

main()