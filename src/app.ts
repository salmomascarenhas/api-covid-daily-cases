import 'dotenv/config'
import express from 'express'
import path from 'path'
import 'reflect-metadata'
import { createConnection } from './database'
import { CovidVariant } from './database/entities/CovidVariant.entity'
import { routes } from './routes'
import { parseCsv } from './shared/parseCsv'

const app = express()

createConnection(process.env.POSTGRES_HOST).then(async (dataSource) => {
    if (dataSource.isInitialized) dataSource.runMigrations()

    const pathFile = path.join(process.cwd() + '/tmp' + '/covid-variants.csv')
    const variantRepository = dataSource.getRepository(CovidVariant)
    const variants: CovidVariant[] = await parseCsv(pathFile)

    // await variantRepository.save(variants, { chunk: 1000 })
})
    .catch(error => console.log(error))
    .finally(() => { console.log('Database has updated with CSV.') })

app.use(express.json())

app.use(routes)

export { app }
