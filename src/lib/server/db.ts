import { building } from "$app/environment"
import initQuery from "$lib/server/init.surql?raw"
import { error } from "@sveltejs/kit"
import {
	type Prettify,
	type QueryParameters,
	Surreal,
	RecordId as SurrealRecordId,
} from "surrealdb"

export const db = new Surreal()

// Retry queries
const ogq = db.query.bind(db)
const retriable = "This transaction can be retried"

// oof
db.query = async <T extends unknown[]>(
	...args: QueryParameters
): Promise<Prettify<T>> => {
	try {
		return (await ogq(...args)) as Prettify<T>
	} catch (err) {
		const e = err as Error
		if (!e.message.endsWith(retriable)) throw e
		console.log("Retrying query:", e.message)
	}
	return await db.query(...args)
}

export const version = db.version.bind(db)

const realUrl = new URL("ws://localhost:8000") // must be ws:// to prevent token expiration, http:// will expire after 1 hour by default

async function reconnect() {
	try {
		await db.close() // doesn't do anything if not connected
		console.log("connecting")
		await db.connect(realUrl, {
			namespace: "main",
			database: "main",
			auth: {
				username: "root", // security B)
				password: "root",
			},
		})
		console.log("reloaded", await version())
	} catch (e) {
		console.error(e)
		error(500, "Failed to reconnect to database")
	}
}

if (!building) {
	await reconnect()
	await db.query(initQuery)
}

type RecordIdTypes = {
	session: string
	user: string
}

// Ensure type safety when creating record ids
export type RecordId<T extends keyof RecordIdTypes> = SurrealRecordId<T>

/**
 * Returns a record id object for a given table and id.
 * @param table The table to get the record id for.
 * @param id The id of the record.
 * @returns a Record object.
 */
export const Record = <T extends keyof RecordIdTypes>(
	table: T,
	id: RecordIdTypes[T]
) => new SurrealRecordId(table, id)
