import apicache from 'apicache'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import path from 'path'
import 'reflect-metadata'
import { createConnection } from './database'
import { CovidVariant } from './database/entities/CovidVariant.entity'
import { routes } from './routes'
import { parseCsv } from './shared/parseCsv'

const app = express()
let cache = apicache.middleware

createConnection(process.env.POSTGRES_HOST).then(async (dataSource) => {

    const pathFile = path.join(process.cwd() + '/tmp' + '/covid-variants.csv')
    const ormRepository = dataSource.getRepository(CovidVariant)
    const count = await ormRepository.count()

    if (dataSource.isInitialized && count < 1) {
        // Parseing CSV with script.
        const variants: CovidVariant[] = await parseCsv(pathFile)

        dataSource.runMigrations()

        // Saving dataframe at in database.
        await ormRepository.save(variants, { chunk: 1000 })
    }
})
    .then(() => { console.log('Database initialized!') })
    .catch(error => console.log(error))

app.use(cors())
app.use(cache('5 minutes'))
app.use(express.json())
app.use(routes)

export { app }
