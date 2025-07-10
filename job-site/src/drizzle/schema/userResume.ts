import { pgTable, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user.ts";
import { createdAt, updatedAt } from "../schemaHelpers.ts";
import { relations } from "drizzle-orm/relations";


export const UserResumeTable = pgTable("user_resume", {
  userId: varchar().primaryKey().references(() => UserTable.id),
  resumeFileUrl: varchar().notNull(),
  resumeFileKey: varchar().notNull(),
  aiSummary: varchar(),
  createdAt,
  updatedAt
})

export const userResumeRelations = relations(UserResumeTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [UserResumeTable.userId],
    references: [UserTable.id]
  })
})
)
