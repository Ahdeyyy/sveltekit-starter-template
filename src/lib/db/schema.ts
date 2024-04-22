import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('user', {
	id: text('id').notNull().primaryKey(),
	username: text('username').notNull(),
	google_id: integer('google_id').unique().notNull()
});

export const session = sqliteTable('session', {
	id: text('id').notNull().primaryKey(),
	expires_at: integer('expires_at').notNull(),
	user_id: text('user_id').notNull().references(() => user.id),
})
