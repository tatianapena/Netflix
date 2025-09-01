import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

const envSchema = joi
  .object({
    PORT: joi.number().default(3000),
    SUPABASE_URL: joi.string().uri().required(),
    SUPABASE_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`❌ Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  supabaseUrl: envVars.SUPABASE_URL,
  supabaseKey: envVars.SUPABASE_KEY,
};
