import { CLIENT_ID, CLIENT_SECRET } from "$env/static/private"
import { redirect } from "@sveltejs/kit"
import { Slack, generateState } from "arctic"

const scopes = ["openid", "email", "profile"]

export async function GET() {
	const state = generateState()

	const slack = new Slack(
		CLIENT_ID,
		CLIENT_SECRET,
		"https://localhost:5173/auth"
	)

	const url = slack.createAuthorizationURL(state, scopes)

	redirect(303, url)
}
