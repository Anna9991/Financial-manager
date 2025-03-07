export default ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: 1, max: 100 },
      acquireConnectionTimeout: 60000,
    },
  };
};