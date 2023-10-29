import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fantasy-football-tracker',
  password: '',
  port: 5432,
});
