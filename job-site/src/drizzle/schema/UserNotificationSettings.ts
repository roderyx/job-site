import { boolean, pgTable, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user.ts";
import { createdAt, updatedAt } from "../schemaHelpers.ts";


export const UserNotificationSettingsTable = pgTable("user_notification_settings", {
  userId: varchar().primaryKey().references(() => UserTable.id),
  newJobEmailNotifications: boolean().notNull().default(false),
  aiPrompt: varchar(),
  createdAt,
  updatedAt
})