import { Request, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"
import { covidVariantsRouters } from "./covidVariants.routes"

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response
        .status(StatusCodes.OK)
        .send({ message: 'Backend Challenge 2021 🏅 - Covid Daily Cases' })
})

routes.use(covidVariantsRouters)

export { routes }
