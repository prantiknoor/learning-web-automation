import { JSDOM } from 'jsdom'
import fs from 'node:fs/promises'

const htmlString = await fs.readFile('portable-bluetooth-speaker-with-fetch.html');

const { document } = (new JSDOM(htmlString)).window

const price = document.querySelector('.money').textContent

console.log({ price })

