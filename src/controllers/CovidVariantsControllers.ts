import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
class CovidVariantsControllers {

    public async countCasesByDate(request: Request, response: Response) {
        const { date } = request.params
        return response.status(StatusCodes.OK).send({ date })
    }

    public async cumulativeCasesByDate(request: Request, response: Response) {
        const { date } = request.params
        return response.status(StatusCodes.OK).send({ date })
    }

    public async allAvailableDates(request: Request, response: Response) {
        return response.status(StatusCodes.OK).send({ message: 'allAvailableDates' })
    }
}

export { CovidVariantsControllers }
