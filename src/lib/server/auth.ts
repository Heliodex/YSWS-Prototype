import { dev } from "$app/environment"
import { Record, db } from "$lib/server/db"
import deleteSessionsQuery from "$lib/server/deleteSessions.surql?raw"
import deleteUserSessionsQuery from "$lib/server/deleteUserSessions.surql?raw"
import getSessionAndUserQuery from "$lib/server/getSessionAndUser.surql?raw"
import setSessionQuery from "$lib/server/setSession.surql?raw"
import type { RecordId } from "@surrealdb/surrealdb"

type SessionValidationResult =
	| { session: string; user: User }
	| { session: null; user: null }

export async function validateSessionToken(
	token: string
): Promise<SessionValidationResult> {
	const [, , , res] = await db.query<SessionValidationResult[]>(
		getSessionAndUserQuery,
		{ sess: Record("session", token) }
	)
	if (!res.session || !res.user) return { session: null, user: null }
	return res
}

export async function createSession(userId: string): Promise<string> {
	const [, session] = await db.query<string[]>(setSessionQuery, {
		user: Record("user", userId),
	})
	return session
}

export async function invalidateSession(session: string): Promise<void> {
	await db.query(deleteSessionsQuery, {
		sess: Record("session", session),
	})
}

export async function invalidateAllSessions(user: string): Promise<void> {
	await db.query(deleteUserSessionsQuery, {
		user: Record("user", user),
	})
}

export const cookieName = "session"
export const cookieSlack = "slackstate"
export const cookieOptions = Object.freeze({
	httpOnly: true,
	sameSite: "lax",
	secure: !dev,
	maxAge: 30 * 24 * 60 * 60, // 30 days
	path: "/",
})
