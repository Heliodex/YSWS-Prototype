import { CLIENT_ID, CLIENT_SECRET } from "$env/static/private"
import { Slack } from "arctic"

export const connectParams = {
	client_id: CLIENT_ID,
	client_secret: CLIENT_SECRET,
	grant_type: "authorization_code",
}

export const slackScopes = ["openid", "email", "profile"]
export const slack = new Slack(
	CLIENT_ID,
	CLIENT_SECRET,
	"https://localhost:5173/login/slack"
)
