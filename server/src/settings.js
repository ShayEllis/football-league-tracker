import dotenv from 'dotenv';

// Initialize dotenv to import enviornment variables
dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
