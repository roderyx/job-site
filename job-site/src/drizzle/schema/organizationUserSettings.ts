import { pgTable } from "drizzle-orm/pg-core/table";
import { boolean, integer, primaryKey, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user.ts";
import { OrganizationTable } from "./organization.ts";
import { createdAt, updatedAt } from "../schemaHelpers.ts";
import { relations } from "drizzle-orm/relations";


export const OrganizationUserSettingsTable = pgTable("orgnaization_user_settings", {
  userId: varchar().notNull().references(() => UserTable.id),
  organizationId: varchar().notNull().references(() => OrganizationTable.id),
  newApplicationEmailNotifications: boolean().notNull().default(false),
  minimumRating: integer(),
  createdAt,
  updatedAt
},
table => [primaryKey({columns: [table.userId, table.organizationId]})]
);

export const organizationUserSettingsRelations = relations(OrganizationUserSettingsTable, ({ one }) => ({
  user: one(UserTable, {
      fields: [OrganizationUserSettingsTable.userId],
      references: [UserTable.id],
  }),
  ornganization: one(OrganizationTable, {
    fields: [OrganizationUserSettingsTable.userId],
    references: [OrganizationTable.id]
  })
}))
