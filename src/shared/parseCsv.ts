import * as csv from 'fast-csv'
import { createReadStream, existsSync } from "fs"
import { CovidVariant } from '../database/entities/CovidVariant.entity'

const parseCsv = async (path: string): Promise<CovidVariant[]> => {
    return new Promise(function (resolve, reject) {
        const array: CovidVariant[] = []

        if (!existsSync(path)) {
            reject(null)
        }

        createReadStream(path)
            .pipe(csv.parse({ headers: true }))
            .on('data', (row) => {
                const variantObj: CovidVariant = new CovidVariant()

                variantObj.variant = row.variant
                variantObj.location = row.location
                variantObj.date = (new Date(row.date))
                variantObj.num_sequences = parseInt(row.num_sequences)
                variantObj.perc_sequences = parseFloat(row.perc_sequences)
                variantObj.num_sequences_total = parseInt(row.num_sequences_total)

                array.push(variantObj)
            })
            .on('end', () => {
                console.log('CSV reading finished.')
                if (!array) reject(new Error(`Could not process CSV.`))

                resolve(array)
            })
            .on('error', (error) =>
                reject(new Error(`Error processing CSV:: ${error}`))
            )
    })
}

export { parseCsv }

