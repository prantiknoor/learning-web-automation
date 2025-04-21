import fs from 'node:fs'

const htmlString = await fetch("https://rt-barberry.myshopify.com/collections/all/products/portable-bluetooth-speaker").then(res => res.text());

fs.writeFileSync('portable-bluetooth-speaker-with-fetch.html', htmlString);