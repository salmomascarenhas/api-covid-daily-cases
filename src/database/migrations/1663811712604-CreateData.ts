import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCovidVariant1663811712604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'covid_variants',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'location',
                        type: 'varchar'
                    },
                    {
                        name: 'date',
                        type: 'date'
                    },
                    {
                        name: 'num_sequences',
                        type: 'int'
                    },
                    {
                        name: 'perc_sequences',
                        type: 'decimal'
                    },
                    {
                        name: 'num_sequences_total',
                        type: 'int'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('covid_variants')

    }

}
