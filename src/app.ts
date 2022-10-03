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

    const pathFile = path.join(process.cwd() + '/tmp' + '/covid-variants.csv')
    const ormRepository = dataSource.getRepository(CovidVariant)
    const count = await ormRepository.count()

    if (dataSource.isInitialized && count < 1) {
        const variants: CovidVariant[] = await parseCsv(pathFile)

        dataSource.runMigrations()
        await ormRepository.save(variants, { chunk: 1000 })
    }
})
    .catch(error => console.log(error))
// .finally(() => { console.log('Database initialized!') })

app.use(express.json())

app.use(routes)

export { app }
