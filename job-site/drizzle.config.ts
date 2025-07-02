import { env } from "./src/data/env/server.ts";
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './srx/drizzle',
  schema: './src/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DB_URL!,
  },
});
