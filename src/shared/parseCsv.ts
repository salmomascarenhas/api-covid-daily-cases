import * as csv from 'fast-csv'
import { createReadStream } from "fs"

const parseCsv = async (path: string): Promise<any[]> => {
    return new Promise(function (resolve, reject) {
        const array: any[] = []
        createReadStream(path)
            .pipe(csv.parse({ headers: true }))
            .on('data', (row) => {
                const obj: any = new Object()
                Object.assign(obj, row)

                array.push(obj)
            })
            .on('end', () => {
                resolve(array)
            })
            .on('error', (error) =>
                reject(new Error(`Erro ao processar o CSV: ${error}`))
            )
    })
}


export { parseCsv }

