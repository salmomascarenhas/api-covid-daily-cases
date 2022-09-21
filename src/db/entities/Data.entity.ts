import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Data {
    @PrimaryGeneratedColumn('uuid')
    id: number

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

    // @CreateDateColumn({ type: 'timestamp' })
    // created_at: Date

    // @UpdateDateColumn({ type: "timestamp" })
    // updated_at: Date
}