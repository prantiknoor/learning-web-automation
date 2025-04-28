import { PrismaClient } from "@prisma/client"
import { setTimeout } from "node:timers/promises"
import PQueue from "p-queue"

const queue = new PQueue({ concurrency: 2 })

const prisma = new PrismaClient()

async function scrape(jobId: number, url: string) {
    await prisma.job.update({ where: { id: jobId }, data: { state: "PROCESSING" } })
    const rawData = await fetch(url).then(data => data.text())
    await prisma.job.update({
        where: { id: jobId },
        data: { data: rawData, state: "DONE" }
    })
}

while (true) {
    const unprocessedJobs = await prisma.job.findMany({
        where: { state: { equals: "PENDING" } }
    })
    for (const unprocessedJob of unprocessedJobs) {
        queue.add(async () => {
            console.log("Processing:", unprocessedJob.url)
            console.time(`Done: ${unprocessedJob.url}`)
            await scrape(unprocessedJob.id, unprocessedJob.url)
            console.timeEnd(`Done: ${unprocessedJob.url}`)
        })
    }
    await setTimeout(1000)
}