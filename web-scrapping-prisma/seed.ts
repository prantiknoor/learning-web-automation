import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

await prisma.job.createMany({
    data: [
        { url: "https://google.com" },
        { url: "https://example.com" },
        { url: "https://uppercasemagazine.com/products/starting-with-64-jan-feb-mar-2025.json" },
        { url: "https://uppercasemagazine.com/products/needle-thread-bundle.json" }
    ]
})
