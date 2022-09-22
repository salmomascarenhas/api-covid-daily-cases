import { Request, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response
        .status(StatusCodes.OK)
        .send({ message: 'Backend Challenge 2021 🏅 - Covid Daily Cases' })
})

export { routes }
