import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import dataSource from '../database'
import { CovidVariant } from '../database/entities/CovidVariant.entity'
class CovidVariantsControllers {

    // localhost:3000/cases/:date/count
    public async countCasesByDate(request: Request, response: Response) {
        const { date } = request.params
        const ormRepository = dataSource.getRepository(CovidVariant)
        const casesInDate = await ormRepository.createQueryBuilder()
            .select('COUNT(id) as count_cases')
            .addSelect('variant')
            .addSelect('location')
            .where('date = :targetData', { targetData: date })
            .groupBy('location')
            .addGroupBy('variant')
            .getRawMany()

        if (!casesInDate)
            return response
                .status(StatusCodes.NO_CONTENT)
                .json({ status: 'NO_CONTENT', message: 'No data available in this interval!' })

        return response.status(StatusCodes.OK).send(casesInDate)
    }

    // localhost:3000/cases/:date/cumulative
    public async cumulativeCasesByDate(request: Request, response: Response) {
        const { date } = request.params
        const ormRepository = dataSource.getRepository(CovidVariant)

        const initialDate = await ormRepository.find({
            select: { date: true },
            order: { date: 'ASC' },
            take: 1,
        })

        if (!initialDate)
            return response
                .status(StatusCodes.NO_CONTENT)
                .json({ status: 'NO_CONTENT', message: 'No initial data available!' })

        const casesCumulative = await ormRepository.createQueryBuilder()
            .select('COUNT(id) as sum_cases')
            .addSelect('variant')
            .addSelect('location')
            .where('date BETWEEN :initialDate AND :finalDate', { initialDate: initialDate[0].date, finalDate: date })
            .groupBy('location')
            .addGroupBy('variant')
            .getRawMany()

        if (!casesCumulative)
            return response
                .status(StatusCodes.NO_CONTENT)
                .json({ status: 'NO_CONTENT', message: 'No data available in this interval!' })


        return response.status(StatusCodes.OK).json(casesCumulative)
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
            .status(StatusCodes.OK)
            .json(dates)
    }
}

export { CovidVariantsControllers }
