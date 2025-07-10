import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers.ts";
import { relations } from "drizzle-orm/relations";
import { JobListingTable } from "./jobListing.ts";
import { OrganizationUserSettingsTable } from "./organizationUserSettings.ts";


export const OrganizationTable = pgTable("organizations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt, 
  updatedAt,
})

export const organizationRelations = relations(OrganizationTable, ({many}) => ({
  jobListings: many(JobListingTable),
  organizationUserSettings: many(OrganizationUserSettingsTable)
}))
