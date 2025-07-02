import { env } from "../data/env/server.ts";
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "./schema"

export const db = drizzle(env.DB_URL!);
