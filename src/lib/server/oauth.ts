import { SLACK_CLIENT_ID, SLACK_SECRET } from "$env/static/private"
import { Slack } from "arctic"

export const connectParams = {
	client_id: SLACK_CLIENT_ID,
	client_secret: SLACK_SECRET,
	grant_type: "authorization_code",
}

export const slackScopes = ["openid", "email", "profile"]
export const slack = new Slack(
	SLACK_CLIENT_ID,
	SLACK_SECRET,
	"https://localhost:5173/login/slack"
)
