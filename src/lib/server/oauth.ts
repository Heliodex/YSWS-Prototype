import { Slack } from "arctic"
import { SLACK_CLIENT_ID, SLACK_SECRET } from "$env/static/private"

export const slackScopes = ["openid", "email", "profile"]
export const slack = new Slack(
	SLACK_CLIENT_ID,
	SLACK_SECRET,
	"https://ysws.heliodex.cf/login/slack"
)
