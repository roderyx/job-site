import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers.ts";
import { relations } from "drizzle-orm/relations";
import { UserNotificationSettingsTable } from "./userNotificationSettings.ts";
import { UserResumeTable } from "./userResume.ts";
import { OrganizationUserSettingsTable } from "./organizationUserSettings.ts";


export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt, 
  updatedAt,
})

export const userRelations = relations(UserTable, ({ one, many}) => ({
  notificationSettings: one(UserNotificationSettingsTable),
  resume: one(UserResumeTable),
  organizationUserSettings: many(OrganizationUserSettingsTable),
})
)
