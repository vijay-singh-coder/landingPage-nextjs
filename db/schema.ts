import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: serial("id").primaryKey(),
    username: text("username").notNull(),
    password: text("password").notNull(),
    email: text("email").notNull().unique(),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
})