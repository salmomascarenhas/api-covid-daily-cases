import 'dotenv/config'
import express from 'express'
import 'reflect-metadata'
import { createConnection } from './database'
import { routes } from './routes'

const app = express()

createConnection(process.env.POSTGRES_HOST)
// .then(async (dataSource) => {
//     const covidVariant = new CovidVariant()

//     covidVariant.date = new Date(Date.parse('01/01/2022'))
//     covidVariant.location = 'Brazil'
//     covidVariant.variante = 'Ômicron'
//     covidVariant.num_sequences = 5000
//     covidVariant.perc_sequences = 50
//     covidVariant.num_sequences_total = 100

//     console.log(await dataSource.getRepository(CovidVariant).save(covidVariant))

// })
// .catch(error => {
//     console.log(error)
// })

app.use(express.json())

app.use(routes)

export { app }
