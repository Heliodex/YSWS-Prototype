import { cookieSlack } from "$lib/server/auth.js"
import { slack, slackScopes } from "$lib/server/oauth"
import { redirect } from "@sveltejs/kit"
import { generateState } from "arctic"

export async function GET({ cookies }) {
	const state = generateState()
	const url = slack.createAuthorizationURL(state, slackScopes)

	cookies.set(cookieSlack, state, {
		path: "/",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax",
	})

	redirect(302, url)
}
