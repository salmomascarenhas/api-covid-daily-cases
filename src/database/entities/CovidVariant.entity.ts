import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('covid_variants')
export class CovidVariant {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'location' })
    location: string

    @Column({ name: 'date', type: 'date' })
    date: Date

    @Column({ name: 'variant' })
    variant: string

    @Column({ name: 'num_sequences' })
    num_sequences: number

    @Column({ name: 'perc_sequences', type: "float" })
    perc_sequences: number

    @Column({ name: 'num_sequences_total' })
    num_sequences_total: number

    constructor() {
        if (!this.id) this.id = uuid()
    }
}