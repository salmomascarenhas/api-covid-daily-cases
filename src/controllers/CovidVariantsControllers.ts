import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import dataSource from '../database'
import { CovidVariant } from '../database/entities/CovidVariant.entity'
class CovidVariantsControllers {

    // localhost:3000/cases/:date/count
    public async countCasesByDate(request: Request, response: Response) {
        const { date } = request.params
        return response.status(StatusCodes.OK).send({ date })
    }

    // localhost:3000/cases/:date/cumulative
    public async cumulativeCasesByDate(request: Request, response: Response) {
        const { date } = request.params
        return response.status(StatusCodes.OK).json({ date })
    }

    // localhost:3000/dates
    public async allAvailableDates(request: Request, response: Response) {
        const ormRepository = dataSource.getRepository(CovidVariant)
        const dates = await ormRepository.find({ select: { date: true } })

        if (!dates)
            return response
                .status(StatusCodes.NO_CONTENT)
                .json({ status: 'NO_CONTENT', message: 'No datas available!' })


        return response
            .json({ status: 'OK', message: { dates } })
    }
}

export { CovidVariantsControllers }
