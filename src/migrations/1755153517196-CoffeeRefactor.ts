import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1755153517196 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // TODO: Write migration SQL here (Contains the SQL or schema changes you want to make.)
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title" `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // TODO: Reverse migration here(Contains the reverse of what you did in up().)
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
  }
}
