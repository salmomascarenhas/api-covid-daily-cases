import { celebrate, Joi, Segments } from "celebrate"
import { Router } from "express"
import { CovidVariantsControllers } from '../controllers'

const covidVariantsRouters = Router()
const covidVariantsController = new CovidVariantsControllers()

covidVariantsRouters.get(
    '/cases/:date/count',
    celebrate({
        [Segments.PARAMS]: {
            date: Joi.date().required(),
        },
    }),
    covidVariantsController.countCasesByDate
)

covidVariantsRouters.get(
    '/cases/:date/cumulative',
    celebrate({
        [Segments.PARAMS]: Joi.object({
            date: Joi.date().raw().required()
        }),
    }),
    covidVariantsController.cumulativeCasesByDate
)

covidVariantsRouters.get(
    '/dates',
    covidVariantsController.allAvailableDates
)

export { covidVariantsRouters }

