import { pgTable, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user.ts";
import { createdAt, updatedAt } from "../schemaHelpers.ts";


export const UserResumeTable = pgTable("user_resume", {
  userId: varchar().primaryKey().references(() => UserTable.id),
  resumeFileUrl: varchar().notNull(),
  resumeFileKey: varchar().notNull(),
  aiSummary: varchar(),
  createdAt,
  updatedAt
})