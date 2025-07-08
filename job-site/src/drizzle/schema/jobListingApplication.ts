import { integer, pgTable, uuid, varchar, pgEnum, primaryKey, text } from "drizzle-orm/pg-core";
import { JobListingTable } from "./jobListing.ts";
import { createdAt, updatedAt } from "../schemaHelpers.ts";
import { UserTable } from "./user.ts";

export const applicationStages = ["denied", "applied", "interested", "interviewed", "hired"] as const;
export type ApplicationStageType = (typeof applicationStages)[number]
export const applicationStageEnum = pgEnum("job_listing_applications_stage", applicationStages)


export const JobListingApplicationTable = pgTable("job_listing_applications", {
  jobListingId: uuid().references(() => JobListingTable.id, {onDelete: "cascade"}).notNull(),
  userId: varchar().references(() => UserTable.id, {onDelete: "cascade"}).notNull(),
  coverLetter: text(),
  rating: integer(),
  stage: applicationStageEnum().notNull().default("applied"),
  createdAt,
  updatedAt
},
table => [primaryKey({columns: [table.jobListingId, table.userId]})]
)