
import { NextFunction, Request, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"
import swaggerUi from 'swagger-ui-express'
import apiSchema from '../api.schema.json'
import { covidVariantsRouters } from "./covidVariants.routes"

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response
        .status(StatusCodes.OK)
        .json({ message: 'Backend Challenge 2021 🏅 - Covid Daily Cases' })
})


routes.use((error, req: Request, res: Response, next: NextFunction) => {
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: 'INTERNAL_SERVER_ERROR', message: error.message })
})

routes.use(covidVariantsRouters)

routes.use('/docs', swaggerUi.serve)

routes.get('/docs', swaggerUi.setup(apiSchema))

export { routes }
