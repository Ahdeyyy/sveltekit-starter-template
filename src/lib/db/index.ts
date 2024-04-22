import { drizzle } from 'drizzle-orm/libsql';
import { LibSQLAdapter } from '@lucia-auth/adapter-sqlite'
import { createClient } from '@libsql/client';
import * as schema from "./schema"
import { dev } from '$app/environment';
import { TURSO_AUTHTOKEN, TURSO_DB_URL } from '$env/static/private';

const clientConfig: { url: string; authToken?: string } = { url: '', authToken: undefined }

if (dev) {
	clientConfig.url = "file:local.db"
} else {
	clientConfig.url = TURSO_DB_URL
	clientConfig.authToken = TURSO_AUTHTOKEN
}

export const client = createClient(clientConfig);

export const db = drizzle(client, { schema });
export const adapter = new LibSQLAdapter(client, {
	user: 'user',
	session: 'session'
})

