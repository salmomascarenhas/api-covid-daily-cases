import * as dotenv from 'dotenv'
import "reflect-metadata"
import { DataSource } from "typeorm"
dotenv.config()

export const PostgresAppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['./entities/*.entity.ts'],
    migrations: ['./migrations/'],
    subscribers: [],
})