import express, { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

const PORT = process.env.API_PORT || 3000
const app = express()

app.get('/', (request: Request, response: Response) => {
    return response
        .status(StatusCodes.OK)
        .send({ message: 'Backend Challenge 2021 🏅 - Covid Daily Cases' })
})

app.listen(PORT, () => console.log(`API is running on PORT ${PORT}!`))