import {
	cookieName,
	cookieOptions,
	cookieSlack,
	createSession,
} from "$lib/server/auth"
import { slack } from "$lib/server/oauth"

import { error, redirect } from "@sveltejs/kit"
import { type OAuth2Tokens, decodeIdToken } from "arctic"

type Claims = {
	sub: string
	name: string
	email: string
}

export async function GET({ cookies, url }) {
	const code = url.searchParams.get("code")
	if (code === null) error(400, "Missing code")
	const state = url.searchParams.get("state")
	if (state === null) error(400, "Missing state")
	const storedState = cookies.get(cookieSlack)
	if (storedState === undefined) error(400, "Missing cookie")

	if (state !== storedState) error(400, "Invalid state")

	let tokens: OAuth2Tokens
	try {
		tokens = await slack.validateAuthorizationCode(code)
	} catch (e) {
		error(400, "Invalid code or client credentials")
	}

	let claims: Claims

	try {
		claims = decodeIdToken(tokens.idToken()) as Claims
		if (!claims.sub || !claims.name || !claims.email) {
			error(400, "Invalid ID token claims")
		}
	} catch (e) {
		error(400, "Failed to decode ID token")
	}

	const slackId = claims.sub
	const slackName = claims.name
	const slackEmail = claims.email

	const existingUser = await getUserFromSlackId(slackId)

	if (existingUser) {
		cookies.set(
			cookieName,
			await createSession(existingUser.id),
			cookieOptions
		)
		redirect(302, "/")
	}

	const user = await createUser(slackId, slackName)

	cookies.set(cookieName, await createSession(user.id), cookieOptions)
	redirect(302, "/")
}
