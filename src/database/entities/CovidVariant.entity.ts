import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('covid_variants')
export class CovidVariant {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    location: string

    @Column()
    date: Date

    @Column()
    variante: string

    @Column()
    num_sequences: number

    @Column()
    perc_sequences: number

    @Column()
    num_sequences_total: number

    constructor() {
        if (!this.id) this.id = uuid()
    }
}