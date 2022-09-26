import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('covid_variants')
export class CovidVariant {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'location' })
    location: string

    @Column({ name: 'date' })
    date: Date

    @Column({ name: 'variant' })
    variant: string

    @Column({ name: 'num_sequences' })
    num_sequences: number

    @Column({ name: 'perc_sequences', type: "float" })
    perc_sequences: number

    @Column({ name: 'num_sequences_total' })
    num_sequences_total: number

    // constructor({ location, date, variant, num_sequences, perc_sequences, num_sequences_total }) {
    //     if (!this.id) this.id = uuid()
    //     if (variant) this.variant = variant
    //     if (location) this.location = location
    //     if (date) this.date = (new Date(date))
    //     if (num_sequences) this.num_sequences = parseInt(num_sequences)
    //     if (perc_sequences) this.perc_sequences = parseFloat(perc_sequences)
    //     if (num_sequences_total) this.num_sequences_total = parseInt(num_sequences_total)
    // }

    constructor() {
        if (!this.id) this.id = uuid()
    }
}