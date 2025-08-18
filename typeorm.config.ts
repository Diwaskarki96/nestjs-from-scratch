import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'diwas',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'], // fixed spelling
  migrations: ['dist/migrations/*.js'],
});
