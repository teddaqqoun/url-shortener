export const PG_CLIENT_CONFIG = {
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
};
