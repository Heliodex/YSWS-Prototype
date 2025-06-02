import { SLACK_CLIENT_ID, SLACK_SECRET } from "$env/static/private"
import { Slack } from "arctic"

export const slackScopes = ["openid", "email", "profile"]
export const slack = new Slack(
	SLACK_CLIENT_ID,
	SLACK_SECRET,
	"https://localhost:5173/login/slack"
)
